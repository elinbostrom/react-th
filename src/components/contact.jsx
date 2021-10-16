import React from "react";
import jesper from "../images/jesper.jpg";
import johan from "../images/johan.jpg";
import tommy from "../images/tommy.jpg";
import leif from "../images/leffe.jpg";
import ContactForm from "./contact_form";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Kontakt</h2>
      <p className="felanmalan">Felanmälan dygnet runt på 08-798 92 00</p>
      <div className="contact__staff">
        <article className="oandr">
          <h3>Säljare ombyggnationer & reparationer</h3>
          <div className="oandr__wrapper">
            <div className="oandr__wrapper__gunnar">
              <div className="oandr__wrapper__gunnar__photo">
                <img src={jesper} alt="Gunnar" />
              </div>
              <div className="oandr__wrapper__gunnar__text">
                <h3>Jesper Näslund</h3>
                <p>070-944 62 24</p>
                <a href="mailto:jesper@tryggahiss.se">jesper@tryggahiss.se</a>
              </div>
            </div>
            <div className="oandr__wrapper__johan">
              <div className="oandr__wrapper__johan__photo">
                <img src={johan} alt="Johan" />
              </div>
              <div className="oandr__wrapper__johan__text">
                <h3>Johan Jonsson</h3>
                <p>076-356 55 18</p>
                <a href="mailto:johan@tryggahiss.se">johan@tryggahiss.se</a>
              </div>
            </div>
          </div>
        </article>
        <article className="asandr">
          <h3>Säljare / Arbetsledare service & reparationer</h3>
          <div className="asandr__wrapper__tommy">
            <div className="asandr__wrapper__tommy__photo">
              <img src={tommy} alt="Tommy" />
            </div>
            <div className="asandr__wrapper__tommy__text">
              <h3>Tommy Fredriksson</h3>
              <p>070-356 53 19</p>
              <a href="mailto:tommy@tryggahiss.se">tommy@tryggahiss.se</a>
            </div>
          </div>
        </article>
        <article className="aoandr">
          <h3>Arbetsledare ombyggnationer & reparationer</h3>
          <div className="aoandr__wrapper__leif">
            <div className="aoandr__wrapper__leif__photo">
              <img src={leif} alt="Leif" />
            </div>
            <div className="aoandr__wrapper__leif__text">
              <h3>Leif Boman</h3>
              <p>070-356 53 61</p>
              <a href="mailto:leffe@tryggahiss.se">leffe@tryggahiss.se</a>
            </div>
          </div>
        </article>
      </div>
      <div className="contact__form">
        <h4>Kontaktformulär</h4>
        <p>Vi besvarar er inom 4 timmar, under ordinarie kontorstid.</p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
