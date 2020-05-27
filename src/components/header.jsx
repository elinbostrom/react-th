import React from "react";
import Navbar from "./nav/navbar";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <Navbar />
        <section className="header__content">
          <h1>Välkommen till Trygga Hiss</h1>
          <div className="elevator">
            <div className="elevator__strings"></div>
            <div className="elevator__container">
              <div className="elevator__door door__left"></div>
              <div className="elevator__door door__right"></div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
