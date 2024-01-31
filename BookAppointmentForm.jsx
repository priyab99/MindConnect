import React from "react";

const BookAppointmentForm = () => {
  return (
    <div>
      <form>
        <h2>Book Appointment</h2>

        <label htmlFor="fullName">Enter Full Name</label>
        <input type="text" id="fullName" name="fullName" required />

        <label htmlFor="mobileNumber">Enter Mobile Number</label>
        <input type="tel" id="mobileNumber" name="mobileNumber" required />

        <label htmlFor="email">Enter Email Address</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="appointmentDate">Appointment Date</label>
        <input type="date" id="appointmentDate" name="appointmentDate" required />

        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flexGrow: 1 }}>
            <label htmlFor="area">Enter Area</label>
            <input type="text" id="area" name="area" required />
          </div>
          <div style={{ flexGrow: 1 }}>
            <label htmlFor="city">Enter City</label>
            <input type="text" id="city" name="city" required />
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flexGrow: 1 }}>
            <label htmlFor="state">Enter State</label>
            <input type="text" id="state" name="state" required />
          </div>
          <div style={{ flexGrow: 1 }}>
            <label htmlFor="postalCode">Postal Code</label>
            <input type="text" id="postalCode" name="postalCode" required />
          </div>
        </div>

        <input type="submit" value="Book Appointment" />
      </form>
    </div>
  );
};

export default BookAppointmentForm;
