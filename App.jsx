import React from 'react';
import './App.css';
import TherapistCard from './TherapistCard';
import therapistImage from './assets/therapist.jpg'; // Update the import path

const therapists = [
  {
    photoUrl: therapistImage,
    name: 'Tasniya Chowdhury',
    address: 'Sugandha abasik, Chawkbazar',
    phone: '01815-098765',
  },
  // Add more therapist objects if needed
];

function App() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {therapists.map((therapist, index) => (
        <TherapistCard key={index} therapist={therapist} />
      ))}
    </div>
  );
}

export default App;
