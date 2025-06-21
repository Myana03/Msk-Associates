import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site header', () => {
  render(<App />);
  const heading = screen.getByText(/MSK Associates/i);
  expect(heading).toBeInTheDocument();
});
