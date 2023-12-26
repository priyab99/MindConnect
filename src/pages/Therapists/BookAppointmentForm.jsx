import { useState } from "react";

const BookAppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, you can send the data to your backend or perform any necessary actions.
    console.log("Form Submitted:", formData);
    // You can add the logic to send the form data to the backend for processing or store it in the state.
  };

  return (
    <div className="mt-5 pt-20">
      <h2 className="text-2xl font-bold mb-3">Book Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
            value={formData.date}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Preferred Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            onChange={handleChange}
            value={formData.time}
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookAppointmentForm;
