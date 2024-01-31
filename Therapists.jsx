import React from 'react';
import therapistImage1 from '../../assets/therapist.jpg';
import therapistImage2 from '../../assets/tharapist_2.jpg';
import therapistImage3 from '../../assets/suraiya_therapist.jpg';

function Therapists() {
  return (
    <div className="container mx-auto pt-20">
      <h2 className="text-center text-3xl font-extrabold mt-10 mb-5">Help us find you a Therapist</h2>

      {/* Display therapists based on the search result */}
      <div className="grid grid-cols-3 gap-3 justify-center pt-5">
        {/* First Therapist */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={therapistImage1} alt="Therapist" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: Dr. Esha Jahan</h2>
            <h2 className="card-title">Specialty: Depression</h2>
            <button className="btn btn-primary">View Profile</button>
          </div>
        </div>

        {/* Second Therapist */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={therapistImage2} alt="Tharapist_2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: Dr. John Doe</h2>
            <h2 className="card-title">Specialty: Anxiety</h2>
            <button className="btn btn-primary">View Profile</button>
          </div>
        </div>

        {/* Third Therapist */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={therapistImage3} alt="Therapist 3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: Dr. Jane Smith</h2>
            <h2 className="card-title">Specialty: PTSD</h2>
            <button className="btn btn-primary">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Therapists;
