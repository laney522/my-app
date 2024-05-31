import { useNavigate, } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const availableTimes = {
  times: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
}

const BookingForm = ({ ...props }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      date: (new Date()).toLocaleDateString("en-CA"),
      time: availableTimes.times[0],
      guests: 1,
      occation: "birthday",
    },
    onSubmit: (values) => {
      const response = true;
      if (response) {
        localStorage.setItem("Bookings", JSON.stringify(values));
        navigate("/confirmation");
      };
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string().oneOf(availableTimes.times).required("Time is required"),
      guests: Yup.number().min(1, "Must be at leat 1").max(10, "Must be at most 10").required("Number of guests is required"),
      occation: Yup.string().oneOf(["birthday", "engagement", "anniversary"]).required("Occation is required"),
    }),
  });

  return (
    <div {...props} id="menu" className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl text-primary1 my-4">Book Now</h1>
      <form onSubmit={formik.handleSubmit} noValidate className="grid">
        <label htmlFor="res-date" className="text-primary1">Choose date</label>
        <input type="date" data-testid="res-date" id="res-date" className="border-2 rounded-md p-2" {...formik.getFieldProps("date")} />
        <span data-testid="res-date-error" className="text-red-500">
          {formik.touched.date && formik.errors.date}
        </span>
        <label htmlFor="res-time" className="text-primary1">Choose time</label>
        <select data-testid="res-time" id="res-time" className="border-2 rounded-md p-2" {...formik.getFieldProps("time")}>
          {availableTimes.times.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <span data-testid="res-time-error" className="text-red-500">
          {formik.touched.time && formik.errors.time}
        </span>
        <label htmlFor="guests" className="text-primary1">Number of guests</label>
        <input data-testid="guests" type="number" placeholder="1" min="1" max="10" id="guests" className="border-2 rounded-md p-2" {...formik.getFieldProps("guests")} />
        <span data-testid="guests-error" className="text-red-500">
          {formik.touched.guests && formik.errors.guests}
        </span>
        <label htmlFor="occasion" className="text-primary1">Occasion</label>
        <select data-testid="occasion" id="occasion" className="border-2 rounded-md p-2" {...formik.getFieldProps("occasion")}>
          <option value="birthday" className="opt">Birthday</option>
          <option value="engagement" className="opt">Engagement</option>
          <option value="anniversary" className="opt">Anniversary</option>
        </select>
        <span data-testid="occasion-error" className="text-red-500">
          {formik.touched.occasion && formik.errors.occasion}
        </span>
        <input data-testid="submit-btn" type="submit" value="Make Your reservation" className="my-4 py-2 px-8 rounded-xl bg-primary2 hover:opacity-80 cursor-pointer ms-auto" />
      </form>
    </div>
  )
};

export default BookingForm;