import React, { useState } from 'react';

function BookingForm({ submitForm, availableTimes, setAvailableTimes, selectedDate, setSelectedDate, guests, occasion, onGuestsChange, onOccasionChange, bookingData }) {
  const [formValid, setFormValid] = useState(false);
  const [dateValid, setDateValid] = useState(true);
  const [guestsValid, setGuestsValid] = useState(true);
  const [occasionValid, setOccasionValid] = useState(true);
  // Define setGuests and setOccasion functions
  const setGuests = onGuestsChange;
  const setOccasion = onOccasionChange;

  // Function to handle change event of the date input field
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setDateValid(e.target.checkValidity()); // Update date validity
    validateForm();
  };

  // Function to handle change event of the guests input field
  const handleGuestsChange = (e) => {
    onGuestsChange(e); // Call parent handler
    setGuestsValid(e.target.checkValidity()); // Update guests validity
    validateForm();
  };

  // Function to handle change event of the occasion select field
  const handleOccasionChange = (e) => {
    onOccasionChange(e); // Call parent handler
    setOccasionValid(e.target.checkValidity()); // Update occasion validity
    validateForm();
  };

  // Function to validate the entire form
  const validateForm = () => {
    setFormValid(dateValid && guestsValid && occasionValid);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      submitForm();
    }
  };

  return (
    <div>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" aria-label="Select reservation time" required>
          {Array.isArray(availableTimes) && availableTimes.map((timeOption, index) => (
            <option key={index}>{timeOption}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} required />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange} aria-label="Select occasion" required>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" disabled={!formValid} aria-label="On Click" />
      </form>
      <h2>Booking Data</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Occasion</th>
          </tr>
        </thead>
        <tbody>
          {bookingData && bookingData.map((booking, index) => (
            <li key={index}>
              Date: {booking.date}, Time: {booking.time}, Guests: {booking.guests}, Occasion: {booking.occasion}
            </li>
            // <tr key={index}>
            //   <td>{booking.date}</td>
            //   <td>{booking.time}</td>
            //   <td>{booking.guests}</td>
            //   <td>{booking.occasion}</td>
            // </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingForm;