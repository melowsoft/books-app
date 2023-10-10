import React from "react";
import { InputWrapper, Input } from "./styles";

interface InputFieldProps { 
    placeholder: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    button?: React.ReactNode;
}

const InputField = ({ placeholder, button, type, value, onChange }: InputFieldProps) => { 

    return (
        <InputWrapper>
            <Input placeholder={placeholder} value={value} type={type} onChange={onChange} />
            {button ? button : null}
        </InputWrapper>
    );
}

export default InputField;