import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Chat from "../../Chat/Chat";

const MySession = () => {
  const { user } = useContext(AuthContext);
  const [allAppointments, setAllAppointments] = useState([]);
  const [mySessions, setMySessions] = useState([]);
  const [otherUser, setOtherUser] = useState(null);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [payments, setAllPayment]=useState([]);
  const [myPayment, setMyPayment]=useState([]);


  useEffect(() => {
    // Fetching all appointments
    fetch('http://localhost:5000/appointments')
      .then((res) => res.json())
      .then((data) => setAllAppointments(data))
      .catch((error) => console.error('Error fetching appointments:', error));
  }, []);

  
  useEffect(() => {
    // Fetching all payments
    fetch('http://localhost:5000/payment')  
      .then((res) => res.json())
      .then((data) => setAllPayment(data))
      .catch((error) => console.error('Error fetching payments:', error));
  }, []);
  
  useEffect(()=>{
    if (user?.email && payments.length > 0) {
      const userPayment = payments.filter((payment) => payment.email === user.email);
      setMyPayment(userPayment);
    }

  },[user?.email, payments])

  useEffect(() => {
    // Filtering appointments based on user email
    if (user?.email && allAppointments.length > 0) {
      const userAppointments = allAppointments.filter((appointment) => appointment.email === user.email);
      setMySessions(userAppointments);
      // If there is a therapist in the appointment, setting them as the otherUser
      const therapistAppointment = userAppointments.find((appointment) => appointment.therapistEmail);
      if (therapistAppointment) {
        setOtherUser({
          uid: therapistAppointment.therapistEmail, // Using therapist's email as a unique identifier
          email: therapistAppointment.therapistEmail,
          name: therapistAppointment.therapistName, // Adding any other relevant details about the therapist
        });
      }

    }
  }, [user?.email, allAppointments]);

  const handleStartChat = () => {
    setIsChatStarted(true);
  };

  return (
    <div>
    {myPayment.length > 0 ? (
      <>
        <h2 className="text-2xl font-bold">Your Upcoming Appointment</h2>
        <ul>
          {mySessions.map((session) => (
            <li key={session._id}>
              <p>Date: {session.date}</p>
              <p>Time: {session.time}</p>
              <p>Session Type: {session.sessionType}</p>
              <p>Appointed To: {session.therapistName}</p>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary mt-4" onClick={handleStartChat} disabled={isChatStarted}>
          Start Message Session
        </button>
        {isChatStarted && otherUser && <Chat currentUser={user} otherUser={otherUser} />}
      </>
    ) : (
      <p>No upcoming appointments. Please make a payment to schedule an appointment.</p>
    )}
  </div>
  );
};

export default MySession;
