import React from "react";
import logo from "../images/logo.jpg";
import styled from "styled-components";
import Navbar from "./nav/navbar";

const Nav = styled.nav`
  position: fixed;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.794) 0%,
    rgba(37, 37, 37, 0.76) 70%,
    rgba(37, 37, 37, 0.753) 100%
  );
  display: flex;
  justify-conent: flex-end;
  align-items: center;
  padding: 1em 2em;
  width: 100vw;
`;

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar />
        <section className="header__content">
          <h1>Välkommen till Trygga Hiss</h1>
        </section>
      </header>
    );
  }
}

export default Header;
