import { render, screen } from '@testing-library/react';
// import App from './App';
import BookingForm from './BookingForm';
import { initializeTimes } from './Main';
import { updateTimes } from './Main';
import userEvent from '@testing-library/user-event';
import Main from './Main';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('JavaScript Validation', () => {
  test('Submitting form with valid data', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText('Choose date');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionSelect = screen.getByLabelText('Occasion');
    const submitButton = screen.getByText('Make Your reservation');

    fireEvent.change(dateInput, { target: { value: '2024-05-25' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    fireEvent.click(submitButton);

    expect(screen.queryByText('Booking Confirmed!')).toBeInTheDocument();
  });

  test('Submitting form with invalid data', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText('Choose date');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionSelect = screen.getByLabelText('Occasion');
    const submitButton = screen.getByText('Make Your reservation');

    fireEvent.change(dateInput, { target: { value: '' } });
    fireEvent.change(guestsInput, { target: { value: '0' } });
    fireEvent.change(occasionSelect, { target: { value: '' } });

    fireEvent.click(submitButton);

    expect(screen.queryByText('Booking Confirmed!')).not.toBeInTheDocument();
    expect(screen.getByText('Please fill out this field.')).toBeInTheDocument();
  });
});

// describe('HTML5 Validation', () => {
//   test('Date input should be required', () => {
//     render(<BookingForm />);
//     const dateInput = screen.getByLabelText('Choose date');
//     expect(dateInput).toHaveAttribute('required');
//   });

//   test('Guests input should have min and max attributes', () => {
//     render(<BookingForm />);
//     const guestsInput = screen.getByLabelText('Number of guests');
//     expect(guestsInput).toHaveAttribute('min', '1');
//     expect(guestsInput).toHaveAttribute('max', '10');
//   });

//   test('Occasion select should be required', () => {
//     render(<BookingForm />);
//     const occasionSelect = screen.getByLabelText('Occasion');
//     expect(occasionSelect).toHaveAttribute('required');
//   });
// });

// // Mock fetchAPI function
// jest.mock('./fetchAPI', () => ({
//   fetchAPI: jest.fn((date) => {
//     // Mocking the API response based on the provided date
//     if (date instanceof Date) {
//       return Promise.resolve(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
//     } else {
//       return Promise.reject(new Error('Invalid date format'));
//     }
//   })
// }));

// test('updateTimes function updates availableTimes state with data from fetchAPI based on selected date', async () => {
//   render(<Main />);

//   // Select a date
//   const dateInput = screen.getByLabelText('Choose date');
//   userEvent.type(dateInput, '2024-05-20');

//   // Wait for availableTimes to be updated
//   await waitFor(() => {
//     expect(screen.getByText('17:00')).toBeInTheDocument();
//     expect(screen.getByText('18:00')).toBeInTheDocument();
//     expect(screen.getByText('19:00')).toBeInTheDocument();
//     expect(screen.getByText('20:00')).toBeInTheDocument();
//     expect(screen.getByText('21:00')).toBeInTheDocument();
//     expect(screen.getByText('22:00')).toBeInTheDocument();
//   });
// });

// test('Renders the BookingForm heading', () => {
//   render(<BookingForm />);
//   const staticTextElement = screen.getByText("Make Your reservation");
//   expect(staticTextElement).toBeInTheDocument();
// })

// test('initializeTimes function returns the initial state', () => {
//   const initialState = initializeTimes();
//   const expectedState = [];
//   expect(initialState).toEqual(expectedState);
// });

// test('updateTimes function returns the same value provided in the state', () => {
//   const currentState = ['09:00', '10:00', '11:00'];
//   const updatedState = updateTimes(currentState);
//   expect(updatedState).toEqual(currentState);
// });

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
