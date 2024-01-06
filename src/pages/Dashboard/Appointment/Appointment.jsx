import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const MySession = () => {
    const {user}=useContext(AuthContext)
  const [allAppointments, setAllAppointments] = useState([]);
  const [mySessions, setMySessions] = useState([]);

  useEffect(() => {
    // Fetching all appointments
    fetch('http://localhost:5000/appointments')
      .then((res) => res.json())
      .then((data) => setAllAppointments(data))
      .catch((error) => console.error('Error fetching appointments:', error));
  }, []);

  useEffect(() => {
    // Filtering appointments based on user email
    if (user.email && allAppointments.length > 0) {
      const userAppointments = allAppointments.filter((appointment) => appointment.therapistEmail === user.email);
      setMySessions(userAppointments);
    }
  }, [user.email, allAppointments]);

  return (
    <div>
      <h2>My Upcoming Appointment</h2>
      <ul>
        {mySessions.map((session) => (
          <li key={session._id}>
            <p>Date: {session.date}</p>
            <p>Time: {session.time}</p>
            <p>Session Type: {session.sessionType}</p>
            <p>Patient Name: {session.name}</p>
            <p>Patient email: {session.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MySession;
