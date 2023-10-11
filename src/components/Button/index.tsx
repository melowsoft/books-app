import React from "react";
import { Container } from "./styles";

interface ButtonProps {
  children: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button = ({ style, children, onClick }: ButtonProps) => {
  return <Container style={style} onClick={onClick}>{children}</Container>;
};

export default Button;
