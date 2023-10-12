import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import  { useInput, InputProvider } from './InputsContext';

// Create a component that uses the useInput hook to interact with the context
function InputComponent() {
  const { titleTerm, setTitleTerm } = useInput();

  return (
    <div>
      <input
        data-testid="title-input"
        type="text"
        value={titleTerm}
        onChange={(e) => setTitleTerm(e.target.value)}
      />
    </div>
  );
}

describe('InputContext', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <InputProvider>
        <InputComponent />
      </InputProvider>
    );
  });

  it('provides the correct data and actions to consumers', () => {
    const { getByTestId } = renderResult;
    
    // Access the input element and test context functions
    const titleInput: HTMLInputElement = getByTestId('title-input') as HTMLInputElement;

    expect(titleInput.value).toBe(''); // Title input initially empty

    fireEvent.change(titleInput, { target: { value: 'New Title' } });
    expect(titleInput.value).toBe('New Title'); // Title input updated

    // You can add more test cases to cover other context data and actions
  });
});
