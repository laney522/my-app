import React, { useReducer, useState } from 'react';


function BookingForm({ availableTimes, setAvailableTimes, selectedDate, setSelectedDate, guests, occasion, onGuestsChange, onOccasionChange }) {

  // Function to handle change event of the date input field
  const handleDateChange = (e) => {
    // Update selected date state
    setSelectedDate(e.target.value);
    // Call the state-changing function passed from Main component to update available times
    setAvailableTimes();
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" >
        {availableTimes.map((timeOption, index) => (
          <option key={index}>{timeOption}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={onGuestsChange} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={onOccasionChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;