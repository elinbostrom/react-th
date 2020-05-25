import React from "react";
import logo from "../images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  componentDidMount() {
    console.log(logo);
  }
  render() {
    return (
      <header>
        <nav className="menu">
          <a href="index.html" className="logo">
            <img src={logo} alt="trygga hiss logotype" />
          </a>
          <ul>
            <li>
              <a href="#aboutUs">Om oss</a>
            </li>
            <li>
              <a href="#services">Tjänster</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
          <button className="burger">
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: "30px", color: "white" }}
            />
          </button>
        </nav>
        <section className="header__content">
          <h1>Välkommen till Trygga Hiss</h1>
        </section>
      </header>
    );
  }
}

export default Header;
