// make a banner with text and image

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();
  const navigateToBooking = () => {
    navigate('/booking');
  };

  return (
    <div className="bg-primary1 p-8 flex gap-4">
      <div className="mx-auto max-w-lg grid gap-4">
        <h1 className="text-primary2 text-4xl font-serif font-bold">Little Lemon</h1>
        <p className="text-grey1 text-lg">The best Mediterranean restaurant in town, with Greek, Italian and Turkish cuisines!</p>
        <button className="me-auto py-2 px-4 bg-primary2 text-grey2 font-bold rounded-lg hover:opacity-80" onClick={navigateToBooking}>Reserve a Table!</button>
      </div>
    </div>
  );
};

export default Banner;