import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "..";

describe("InputField component", () => {
  it("should render the input field with placeholder and value correctly", () => {
    render(
      <InputField
        placeholder="Username"
        value="john.doe"
        type="text"
        onChange={() => {}}
      />
    );

    const inputElement = screen.getByPlaceholderText("Username");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("john.doe");
  });

  it("should call the onChange function when the input value changes", () => {
    const onChangeMock = jest.fn();
    render(
      <InputField
        placeholder="Username"
        value=""
        type="text"
        onChange={onChangeMock}
      />
    );

    const inputElement = screen.getByPlaceholderText("Username");
    fireEvent.change(inputElement, { target: { value: "jane.doe" } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should render the input field with a button", () => {
    const buttonElement = <button>Click Me</button>;
    render(
      <InputField
        placeholder="Username"
        value=""
        type="text"
        button={buttonElement}
        onChange={() => {}}
      />
    );

    const inputElement = screen.getByPlaceholderText("Username");
    const button = screen.getByText("Click Me");

    expect(inputElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should render with an error style when hasError is true", () => {
    render(
      <InputField
        placeholder="Username"
        value=""
        type="text"
        hasError={true}
        onChange={() => {}}
      />
    );

    const inputElement = screen.getByPlaceholderText("Username");

    expect(inputElement).toHaveClass("sc-gEvEer kYsTdT");
  });

  it("should forward a ref", () => {
    const ref: React.Ref<HTMLInputElement> = React.createRef();
    render(
      <InputField
        placeholder="Username"
        value=""
        type="text"
        onChange={() => {}}
        ref={ref}
      />
    );

    const inputElement = screen.getByPlaceholderText("Username");

    expect(inputElement).toBe(ref.current);
  });
});
