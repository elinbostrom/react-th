import React from "react";
import sigill from "../images/sigill.png";
import GDPR from '../images/personuppgiftspolicy.pdf';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer__text">
          <p>
            <strong>Trygga Hiss i Stockholm AB</strong> | Box 90333 | 120 25
            Stockholm | Felanmälan/Växel 08-798 92 00 | E-post:
          <a href="mailto:info@tryggahiss.se">info@tryggahiss.se</a>
          </p>
        <a className="gdpr" href={GDPR} target="_blank">Personuppgiftspolicy</a>
        </div>
        <div className="sigill">
          <img src={sigill} alt="UC Sigill" />
        </div>
      </footer>
    );
  }
}

export default Footer;
