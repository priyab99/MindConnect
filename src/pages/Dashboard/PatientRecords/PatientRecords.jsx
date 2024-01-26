import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import FeedbackForm from "./FeedbackForm";


const PatientRecords = () => {
    const { user } = useContext(AuthContext);
    const [allAppointments, setAllAppointments] = useState([]);
    const [myPatients, setMyPatients] = useState([]);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [selectedPatientEmail, setSelectedPatientEmail] = useState('');

    const handleFeedbackClick = (patientEmail) => { // Pass email as a parameter
        setSelectedPatientEmail(patientEmail);
        setShowFeedbackModal(true);
    };

    const handleModalClose = () => {
        setShowFeedbackModal(false);
        setSelectedPatientEmail('');
    };

    useEffect(() => {
        // Fetching all appointments
        fetch('http://localhost:5000/appointments')
            .then((res) => res.json())
            .then((data) => setAllAppointments(data))
            .catch((error) => console.error('Error fetching appointments:', error));
    }, []);

    useEffect(() => {
        if (user?.email && allAppointments.length > 0) {
            const userAppointments = allAppointments.filter((appointment) => appointment.therapistEmail === user.email);
            setMyPatients(userAppointments);
        }

    }, [user?.email, allAppointments])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myPatients.map((patient, index) => <tr key={patient._id}>
                                <th>{index + 1}</th>
                                <td>{patient.name}</td>
                                <td>{patient.email}</td>

                                <td> <button
                                    className="btn btn-primary"
                                    onClick={() => handleFeedbackClick(patient.email)}
                                >
                                    Give Feedback
                                </button></td>
                            </tr>)
                        }

                    </tbody>
                </table>

                {showFeedbackModal && (
        <div className="feedback-form-container"> {/* Add a container for the form */}
          <h2 className="text-lg font-medium">Give Feedback</h2>
          <FeedbackForm patientEmail={selectedPatientEmail} />
          <button className="btn btn-secondary" onClick={handleModalClose}>Close</button>
        </div>
      )}
              
            </div>
        </div>
    );
};

export default PatientRecords;