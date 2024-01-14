import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Chat from "../../Chat/Chat";

const MySession = () => {
  const { user } = useContext(AuthContext);
  const [allAppointments, setAllAppointments] = useState([]);
  const [mySessions, setMySessions] = useState([]);
  const [otherUser, setOtherUser] = useState(null);
  const [isChatStarted, setIsChatStarted] = useState(false);

  useEffect(() => {
    // Fetching all appointments
    fetch('http://localhost:5000/appointments')
      .then((res) => res.json())
      .then((data) => setAllAppointments(data))
      .catch((error) => console.error('Error fetching appointments:', error));
  }, []);

  useEffect(() => {
    // Filtering appointments based on user email
    if (user?.email && allAppointments.length > 0) {
      const userAppointments = allAppointments.filter((appointment) => appointment.email === user.email);
      setMySessions(userAppointments);
      // If there is a therapist in the appointment, set them as the otherUser
      const therapistAppointment = userAppointments.find((appointment) => appointment.therapistEmail);
      if (therapistAppointment) {
        setOtherUser({
          uid: therapistAppointment.therapistEmail, // Use therapist's email as a unique identifier
          email: therapistAppointment.therapistEmail,
          name: therapistAppointment.therapistName, // Add any other relevant details about the therapist
        });
      }

    }
  }, [user?.email, allAppointments]);

  const handleStartChat = () => {
    setIsChatStarted(true);
  };

  return (
    <div>
      <h2>Your Upcoming Appointment</h2>
      <ul>
        {mySessions.map((session) => (
          <li key={session._id}>
            <p>Date: {session.date}</p>
            <p>Time: {session.time}</p>
            <p>Session Type: {session.sessionType}</p>
            <p>Therapist Name: {session.therapistName}</p>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleStartChat} disabled={isChatStarted}>
        Start Message Session
      </button>
      {isChatStarted && otherUser && <Chat currentUser={user} otherUser={otherUser} />}
    </div>
  );
};

export default MySession;
