import React, { forwardRef, Ref, InputHTMLAttributes } from "react";
import { InputWrapper, Input } from "./styles";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  button?: React.ReactNode;
  hasError?: boolean;
}

const InputField = (
  {
    placeholder,
    button,
    hasError,
    type,
    value,
    onChange,
    ...rest
  }: InputFieldProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <InputWrapper isError={hasError}>
      <Input
        {...rest}
        ref={ref}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
      />
      {button ? button : null}
    </InputWrapper>
  );
};

const ForwardedInputField = forwardRef(InputField);

export default ForwardedInputField;
