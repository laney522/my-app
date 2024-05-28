import React, { useState, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return action.payload;
    case 'UPDATE_TIMES':
      return calculateAvailableTimes();
    default:
      return state;
  }
};

// Function to calculate available times 
const calculateAvailableTimes = () => {
  // Dummy implementation, replace with actual logic
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

function Main() {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookingData, setBookingData] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
 // const navigate = useNavigate();

  // Function to submit the form data
  const submitForm = async (formData) => {
    try {
      // eslint-disable-next-line no-undef
      const isBookingConfirmed = await submitAPI(formData);
      if (isBookingConfirmed) {
        setBookingConfirmed(true);
        setBookingData([...bookingData, formData]);
        //navigate('/confirmed');
      } else {
        console.log("Booking submission failed."); // Log an error message
      }
    } catch (error) {
      console.log('Error submitting booking:', error);
    }
  }

  // Function to handle state change of availableTimes based on selected date
  const updateTimes = async (newDate) => {
    try {
      const times = await fetch(newDate);
      dispatch({ type: 'UPDATE_TIMES', payload: times });
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
    // dispatch({ type: 'UPDATE_TIMES', payload: newDate });
  };

  // Function to initialize the state for availableTimes
  const initializeTimes = async () => {
    try {
      const times = await fetch(new Date());
      dispatch({ type: 'INITIALIZE_TIMES', payload: times });
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
    // const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    // dispatch({ type: 'INITIALIZE_TIMES', payload: defaultTimes });
  }

  React.useEffect(() => {
    // Initialize available times when component mounts
    initializeTimes();
  }, []); // This empty dependency array ensures the effect runs only once after the initial render!!

  React.useEffect(() => {
    //Update available times whenever selected date changes
    updateTimes();
  }, [selectedDate]);

  return (
    <Router>
      <div>
        <h1>Little Lemon Reservation</h1>
        <Routes>
          <Route
            path="/"
            element={<BookingForm
              submitForm={submitForm}
              availableTimes={availableTimes}
              setAvailableTimes={updateTimes}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              bookingData={bookingData}
            />}
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;