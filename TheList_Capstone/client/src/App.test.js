import { render, screen } from '@testing-library/react';
import TheList from './TheList';

test('renders learn react link', () => {
  render(<TheList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
