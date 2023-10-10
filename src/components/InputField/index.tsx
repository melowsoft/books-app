import React from "react";
import { InputWrapper, Input } from "./styles";

interface InputFeildProps { 
    placeholder: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFeild = ({ placeholder, type, value, onChange }: InputFeildProps) => { 

    return (
        <InputWrapper>
            <Input />
        </InputWrapper>
    );
}

export default InputFeild;