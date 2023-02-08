import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const helloWorld = screen.getByText('CI/CD Example');
  expect(helloWorld).toBeInTheDocument();
});
