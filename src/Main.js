import React, { useState, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingForm from './BookingForm';

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same available times regardless of the date
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
  const [selectedDate, setSelectedDate] = React.useState('');

  // Function to handle state change of availableTimes based on selected date
  const updateTimes = (newDate) => {
    dispatch({ type: 'UPDATE_TIMES', payload: newDate });
  };

  // Function to initialize the state for availableTimes
  const initializeTimes = () => {
    const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    dispatch({ type: 'INITIALIZE_TIMES', payload: defaultTimes });
  }

  React.useEffect(() => {
    //Update available times whenever selected date changes
    updateTimes();
  }, [selectedDate]);

  return (
    <div>
      <h1>Little Lemon Reservation</h1>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={updateTimes}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
}

export default Main;