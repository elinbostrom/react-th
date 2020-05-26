import React, { useState } from "react";
import styled from "styled-components";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 30px;
  right: 30px;
  cursor: pointer;
  display: none;

  @media (max-width: 700px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#98cdb6" : "white")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

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

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Menu open={open} onClick={() => setOpen(!open)}>
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
    </>
  );
};

export default Burger;
