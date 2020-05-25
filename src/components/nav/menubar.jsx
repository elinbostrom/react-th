import React from "react";
import styled from "styled-components";

const Menu = styled.menu`
  display: flex;

  li {
    list-style: none;
    margin: 0 1em;

    @media (max-width: 700px) {
      margin: 0.5em 2em;
    }
  }

  @media (max-width: 700px) {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      60deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(37, 37, 37, 1) 50%,
      rgba(37, 37, 37, 1) 100%
    );
    margin-top: 90px;
    padding: 2em 0;
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    width: 100vw;
    text-align: right;
    transition: transform 0.3s ease-in-out;
  }
`;

const Menubar = ({ open }) => {
  return (
    <Menu open={open}>
      <li>
        <a href="#aboutUs">Om oss</a>
      </li>
      <li>
        <a href="#services">Tjänster</a>
      </li>
      <li>
        <a href="#contact">Kontakt</a>
      </li>
    </Menu>
  );
};

export default Menubar;
