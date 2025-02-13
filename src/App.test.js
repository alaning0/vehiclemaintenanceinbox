import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "./components/Header";

test('displays "Vehicle Maintenance Inbox"', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Vehicle Maintenance Inbox/i);
  expect(headerElement).toBeInTheDocument();
});