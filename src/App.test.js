import { render, screen } from '@testing-library/react';
// import App from './App';
import BookingForm from './BookingForm';
import { initializeTimes } from './Main';
import { updateTimes } from './Main';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';

// Mock fetchAPI function
jest.mock('./fetchAPI', () => ({
  fetchAPI: jest.fn((date) => {
    // Mocking the API response based on the provided date
    if (date instanceof Date) {
      return Promise.resolve(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    } else {
      return Promise.reject(new Error('Invalid date format'));
    }
  })
}));

test('updateTimes function updates availableTimes state with data from fetchAPI based on selected date', async () => {
  render(<Main />);

  // Select a date
  const dateInput = screen.getByLabelText('Choose date');
  userEvent.type(dateInput, '2024-05-20');

  // Wait for availableTimes to be updated
  await waitFor(() => {
    expect(screen.getByText('17:00')).toBeInTheDocument();
    expect(screen.getByText('18:00')).toBeInTheDocument();
    expect(screen.getByText('19:00')).toBeInTheDocument();
    expect(screen.getByText('20:00')).toBeInTheDocument();
    expect(screen.getByText('21:00')).toBeInTheDocument();
    expect(screen.getByText('22:00')).toBeInTheDocument();
  });
});

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
