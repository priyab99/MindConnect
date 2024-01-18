
import { useEffect, useState } from "react";
import { collection, query, where, orderBy, onSnapshot ,addDoc,serverTimestamp} from "firebase/firestore";
import { db } from "../../firebase/firebase.config";


const Chat = ({ currentUser, otherUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const messagesRef = collection(db, "messages");
  const chatQuery = query(
    messagesRef,
    orderBy("timestamp"),
    where("senderId", "==", currentUser.uid),
    where("receiverId", "==", otherUser.uid)
  );
  
  const reverseChatQuery = query(
    messagesRef,
    orderBy("timestamp"),
    where("senderId", "==", otherUser.uid),
    where("receiverId", "==", currentUser.uid)
  );
  
  const finalQuery = query(chatQuery, reverseChatQuery);
  
  
  
  
  useEffect(() => {
    const unsubscribe = onSnapshot(finalQuery, (snapshot) => {
  
      const messagesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      setMessages(messagesData);
    });
  
    return () => unsubscribe();
  }, [finalQuery]);
  
  

  const sendMessage = async () => {
    try {
        const timestamp = serverTimestamp();
        const newMessageData = { senderId: currentUser.uid, receiverId: otherUser.uid, content: newMessage, timestamp };
        await addDoc(messagesRef, newMessageData);
        setNewMessage("");
    } catch (error) {
        console.error("Error sending message:", error);
    }
};


  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
          <p>{message.senderId === currentUser.uid ? 'You: ' : `${otherUser.name || 'Other User'}: `}{message.content}</p>
          {/* Add timestamp if needed */}
        </div>
        ))}
      </div>
      <div>
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;