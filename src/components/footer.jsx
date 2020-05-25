import React from "react";
import sigill from "../images/sigill.png";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer__text">
          <p>
            <strong>Trygga Hiss i Stockholm AB</strong> | Box 90333 | 120 25
            Stockholm | Felanmälan/Växel 08-798 92 00 | E-post:
          </p>
          <a href="mailto:info@tryggahiss.se">info@tryggahiss.se</a>
        </div>
        <div className="sigill">
          <img src={sigill} alt="UC Sigill" />
        </div>
      </footer>
    );
  }
}

export default Footer;
