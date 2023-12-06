import  { useEffect, useState } from "react";

const Therapists = () => {
    const [therapists, setTherapists] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/therapists')
            .then(res => res.json())
            .then(data => setTherapists(data))
            .catch(error => console.error('Error fetching therapists:', error));
    }, []);

    // Filter therapists based on the search query
    const filteredTherapists = therapists.filter(therapist =>
        therapist.Specialty.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto pt-20">
            {/* Search input field */}
            <input
                type="text"
                placeholder="Search by specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 rounded-md"
            />

            {/* Display therapists based on the search result */}
            <div className="grid grid-cols-3 gap-3 justify-center pt-5">
                {filteredTherapists.map(therapist => (
                    <div key={therapist._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={therapist.Image} alt={therapist.Name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{therapist.Name}</h2>
                                <p>Specialty: {therapist.Specialty}</p>
                                <p>Qualification: {therapist.Degree}</p>
                                <p>Rating: {therapist.Rating}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Make Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Therapists;
