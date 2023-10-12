import React from "react";
import { Container, LeftBox, LogoWrap, RightBox, BorderBox } from "./styles";
import { Link } from "react-router-dom";
import NavButton from "../NavButton";
import LOGOIMG from "../../assets/logo.png";
import Button from "../Button";

const Navbar = () => {
  return (
    <Container>
      <LeftBox>
        <LogoWrap>
          <Link to="/">
            <img src={LOGOIMG} style={{ width: "60%" }} alt="logo" />
          </Link>
        </LogoWrap>

        <NavButton>Shop</NavButton>
        <NavButton>Blog</NavButton>
        <NavButton>About</NavButton>
        <NavButton>Team</NavButton>
      </LeftBox>
      <RightBox>
        <BorderBox>
          <Button>Sign up</Button>
        </BorderBox>
      </RightBox>
    </Container>
  );
};

export default Navbar;
