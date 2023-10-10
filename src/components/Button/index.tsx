import React from "react";
import { Container } from "./styles";

interface ButtonProps {
  children: string;
  style?: React.CSSProperties;
}

const Button = ({ style, children }: ButtonProps) => {
  return <Container style={style}>{children}</Container>;
};

export default Button;
