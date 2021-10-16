import React from "react";
import Navbar from "./nav/navbar";

export const Header = () => {
  return (
    <header id="header">
      <Navbar />
      <section className="header__content">
        <h1>Välkommen till Trygga Hiss</h1>
        {/* <div className="elevator">
            <div className="elevator__strings"></div>
            <Link
              to="header"
              smooth={true}
              duration={1000}
              className="elevator__container"
            >
              <Link
                to="header"
                smooth={true}
                duration={1000}
                className="elevator__door door__left"
              ></Link>
              <Link
                to="header"
                smooth={true}
                duration={1000}
                className="elevator__door door__right"
              ></Link>
            </Link>
          </div> */}
      </section>
    </header>
  );
};

export default Header;
