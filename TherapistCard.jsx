import React from 'react';

const TherapistCard = ({ therapist }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={therapist.photoUrl}
        alt={`Photo of ${therapist.name}`}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{therapist.name}</h2>
      <p className="text-gray-600">{therapist.address}</p>
      <p className="text-gray-600">{therapist.phone}</p>
    </div>
  );
};

export default TherapistCard;
