import React from "react";
import logo from "../../images/logo.jpg";
import styled from "styled-components";

// Components
import Burger from "./burger";

const Nav = styled.nav`
  position: fixed;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0) 0%,
    rgba(37, 37, 37) 70%,
    rgba(37, 37, 37) 100%
  );
  display: flex;
  justify-conent: flex-end;
  align-items: center;
  padding: 1em 2em;
  width: 100vw;
  transition: top 0.3s;
`;

class Navbar extends React.Component {
  render() {
    return (
      <Nav className="menu">
        <a href="index.html" className="logo">
          <img src={logo} alt="trygga hiss logotype" />
        </a>
        <Burger />
      </Nav>
    );
  }
}

export default Navbar;
