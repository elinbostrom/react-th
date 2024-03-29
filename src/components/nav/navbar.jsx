import React from "react";
import logo from "../../images/logo.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import Burger from "./burger";

const Nav = styled.nav`
  position: fixed;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0) 0%,
    rgba(37, 37, 37) 70%,
    rgba(37, 37, 37) 100%
  );
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1em 2em;
  width: 100vw;
  transition: top 0.3s;
  z-index: 20;
`;

export const Navbar = () => {
  return (
    <Nav className="menu">
      <Link to="/" className="logo">
        <img src={logo} alt="trygga hiss logotype" />
      </Link>
      <Burger />
    </Nav>
  );
};

export default Navbar;
