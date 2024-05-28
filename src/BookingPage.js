import React, { useState } from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');


  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  return (
    <div>
      <h2>Make a Reservation</h2>
      <BookingForm
        date={date}
        time={time}
        guests={guests}
        occasion={occasion}
        // availableTimes={availableTimes}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
        onGuestsChange={handleGuestsChange}
        onOccasionChange={handleOccasionChange}
      />
    </div>
  );
}

export default BookingPage;