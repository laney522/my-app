import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

function Main() {
  return (
    <Routes>
      <Routes path="/" element={<HomePage />} />
      <Routes path="/booking" element={<BookingPage />} />
      <Routes />
    </Routes>
  )
}

export default Main;