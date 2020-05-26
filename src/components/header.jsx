import React from "react";
import Navbar from "./nav/navbar";

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
