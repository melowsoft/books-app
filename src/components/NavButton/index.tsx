import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

interface NavButtonProps {
  children: string;
}

const NavButton = ({ children }: NavButtonProps) => {
  return (
    <Container>
      <Link to="/">{children}</Link>
    </Container>
  );
};

export default NavButton;
