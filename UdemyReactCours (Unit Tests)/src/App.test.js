import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('firstTest', () => {
  render(<App />);
  const linkElement = screen.getByText(/this is a test/i);
  expect(linkElement).toBeInTheDocument();
});