import React from 'react';

function BookingForm({ submitForm, availableTimes, setAvailableTimes, selectedDate, setSelectedDate, guests, occasion, onGuestsChange, onOccasionChange, bookingData }) {
  // eslint-disable-next-line no-undef
  const [formData, setFormData] = useState({
    Date:'',
    Time:'',
    Guests: '',
    Occasion: '',
  })

  // Function to handle change event of the date input field
  const handleDateChange = (e) => {
    // Update selected date state
    setSelectedDate(e.target.value);
    // // Call the state-changing function passed from Main component to update available times
    setAvailableTimes();
  };

  return (
    <div>
      <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" aria-label="Select reservation time" required>
          {Array.isArray(availableTimes) && availableTimes.map((timeOption, index) => (
            <option key={index}>{timeOption}</option>
          ))}
          {/* {availableTimes && availableTimes.map((timeOption, index) => (
            <option key={index}>{timeOption}</option>
          ))} */}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={onGuestsChange} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={onOccasionChange} aria-label="Select occasion" required>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
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
            <tr key={index}>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.guests}</td>
              <td>{booking.occasion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingForm;