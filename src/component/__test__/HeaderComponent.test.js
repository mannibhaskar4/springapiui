import { render, screen } from '@testing-library/react';
import HeaderComponent from '../HeaderComponent';
// import App from './App';

test('renders Header value', () => {
  render(<HeaderComponent />);
  const HeaderElement = screen.getByText('Employee Management System');
  expect(HeaderElement).toBeTruthy();
});

test('checks wether a tag is redirecting to backend code', () => {
    render(<HeaderComponent />);
    const HeaderElement = screen.getByText('Employee Management System').closest('a')
    expect(HeaderElement).toHaveAttribute('href', 'https://github.com/mannibhaskar4/employee-management-system');
  });