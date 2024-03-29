import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Therapists = () => {
    const [therapists, setTherapists] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('https://mind-connect-server.vercel.app/therapists')
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
            <h2 className='text-center text-3xl font-extrabold mt-10 mb-5'>Help us to find you a Therapist</h2>
            {/* Search input field */}
            <input
                type="text"
                placeholder="Search by specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 rounded-md"
            />

            {/* Display therapists based on the search result */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                {filteredTherapists.map(therapist => (
                    <div key={therapist._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={therapist.Image} alt={therapist.Name} className="w-full h-48 object-cover" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name: {therapist.Name}</h2>
                                <h2 className="card-title">Specialty: {therapist.Specialty}</h2>
                                <div className="card-actions flex justify-end">
                                   <Link to={`/therapists/${therapist._id}`} > <button className="btn btn-primary">View Profile</button></Link>
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
