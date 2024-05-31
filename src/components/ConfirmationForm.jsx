// confirmation page

import { useNavigate } from "react-router-dom";

function ConfirmationForm() {
  const navigate = useNavigate();
  const navigateToBooking = () => {
    navigate("/booking");
  }

  const booking = JSON.parse(localStorage.getItem("Bookings"));
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl text-primary1 my-4">Booking Confirmation</h1>
      <p className="text-primary1">Booking details:</p>
      <p className="text-primary1">Date: {booking.date}</p>
      <p className="text-primary1">Time: {booking.time}</p>
      <p className="text-primary1">Number of guests: {booking.guests}</p>
      <p className="text-primary1">Occasion: {booking.occasion}</p>
      <button className="py-2 px-4 my-4 bg-primary2 text-grey2 font-bold rounded-lg hover:opacity-80" onClick={navigateToBooking}>Book another table</button>
    </div>
  );
};

export default ConfirmationForm;