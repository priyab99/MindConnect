import  { useState} from "react";


const BookAppointmentForm = ({ therapistId }) => {
 // const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...formData, therapistId: therapistId })
        })


            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Appointment is successful');
                }
            })
    }
    
  

  return (
    <div className="mt-5 pt-20">
      <h2 className="text-2xl font-bold mb-3">Book Appointment</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Preferred Date</span>
          </label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={formData.date}
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Preferred Time</span>
          </label>
          <input
            type="time"
            name="time"
            onChange={handleChange}
            value={formData.time}
            required
            className="input input-bordered"
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointmentForm;
