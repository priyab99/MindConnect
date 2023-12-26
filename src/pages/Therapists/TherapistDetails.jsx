import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import BookAppointmentForm from "./BookAppointmentForm";

const TherapistDetails = () => {
  const { therapistsId } = useParams();
  const therapists = useLoaderData();
  const [therapistDetails, setTherapistDetail] = useState({});

  useEffect(() => {
    if (therapists && therapists.length) {
      const therapist = therapists.find(
        (therapist) => therapist._id === therapistsId
      );
      setTherapistDetail(therapist || {}); // Handle the case where therapist is not found
    }
  }, [therapists, therapistsId]);

  const { Name, Image, Specialty, Degree, Rating, email, AvailableTime } =
    therapistDetails;

  // Explicitly assert that therapistsId is not undefined
  return therapistsId ? (
    <div className="card card-compact w-180 bg-base-100 shadow-xl grid grid-cols-2 gap-4 mb-5 mt-5 ml-20 pt-20">
      <div className="card-image">
        <img src={Image} alt="Therapist" />
      </div>
      <div className="card-details">
        <h2 className="card-title text-3xl font-bold">Therapist Name: {Name}</h2>
        <h2 className="text-xl">Email: {email}</h2>
        <h2 className="text-xl">Specialty: {Specialty}</h2>
        <h2 className="text-xl">Qualification: {Degree}</h2>
        <p className="text-lg font-semibold">Rating: {Rating}</p>
        <p className="text-lg font-semibold mb-5">Available Time: {AvailableTime}</p>

        <Link to="/bookappointment">
          <button className="btn btn-primary">Book Appointment</button>
        </Link>
        <BookAppointmentForm therapistId={therapistsId} />
      </div>
    </div>
  ) : null; // Render nothing if therapistsId is undefined
};

export default TherapistDetails;