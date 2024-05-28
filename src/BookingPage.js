import React, { useState } from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
  // const [date, setDate] = useState('');
  // const [time, setTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [bookingData, setBookingData] = useState([]);

  // const handleDateChange = (e) => {
  //   setDate(e.target.value);
  // };

  // const handleTimeChange = (e) => {
  //   setTime(e.target.value);
  // };

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
        availableTimes={[]}
        setAvailableTimes={() => { }}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        // date={date}
        // time={time}
        guests={guests}
        occasion={occasion}
        // onDateChange={handleDateChange}
        // onTimeChange={handleTimeChange}
        onGuestsChange={handleGuestsChange}
        onOccasionChange={handleOccasionChange}
        bookingData={bookingData}
      />
    </div>
  );
}

export default BookingPage;