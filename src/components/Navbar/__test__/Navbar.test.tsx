import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Assuming you are using react-router
import Navbar from '..';

describe('Navbar component', () => {
  it('should render the logo and navigation links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();

    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Team')).toBeInTheDocument();
  });

  it('should render the "Sign up" button', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  it('should navigate to the home page when clicking the logo', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const logoElement = screen.getByAltText('logo');

    expect(logoElement.closest('a')).toHaveAttribute('href', '/');
  });
});
