import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '..';

describe('Button component', () => {
  it('should render the button text correctly', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should apply custom styles when provided', () => {
    const customStyles = { backgroundColor: 'blue', color: 'white' };
    render(<Button style={customStyles}>Styled Button</Button>);
    const buttonElement = screen.getByText('Styled Button');
    
    expect(buttonElement).toHaveStyle('background-color: blue');
    expect(buttonElement).toHaveStyle('color: white');
  });

  it('should call the onClick function when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click Me</Button>);
    const buttonElement = screen.getByText('Click Me');
    
    fireEvent.click(buttonElement);
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should render the button without custom styles when not provided', () => {
    render(<Button>Default Button</Button>);
    const buttonElement = screen.getByText('Default Button');
    

    expect(buttonElement).not.toHaveStyle('background-color: blue');
    expect(buttonElement).not.toHaveStyle('color: white');
  });
});
