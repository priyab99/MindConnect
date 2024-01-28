import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyProgress = () => {
  const { user } = useContext(AuthContext);
  const [progress, setProgress] = useState([]);
  const [myProgress, setMyProgress] = useState([]);

  useEffect(() => {
    fetch('https://mind-connect-server.vercel.app/progress')
      .then((res) => res.json())
      .then((data) => setProgress(data))
      .catch((error) => console.error('Error fetching appointments:', error));
  }, []);

  useEffect(() => {
    if (user?.email && progress.length > 0) {
      const userProgress = progress.filter((p) => p.patientEmail === user.email); 
      setMyProgress(userProgress);
    }
  }, [user?.email, progress]);

  return (
    <div>
    <h1 className="text-2xl font-bold mb-5">My Progress</h1>
    <ul>
      {myProgress.map((p) => (
        <li key={p._id}>
          <p>Progress: <progress className="progress progress-secondary w-56" value={p.progress} max="100"></progress> </p>
          <p>Strengths: {p.strengths}</p>
          <p>Areas for Improvement: {p.areasForImprovement}</p>
          <p>Notes: {p.notes}</p>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default MyProgress;
