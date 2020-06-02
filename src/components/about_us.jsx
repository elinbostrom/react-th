import React from "react";
import groupPicture from "../images/kaj1_edited2.JPG";

class AboutUs extends React.Component {
  render() {
    return (
      <main className="aboutUs" id="aboutUs">
        <section className="aboutUs__text">
          <h2>
            Trygga hiss är ett företag som har lång erfarenhet av service,
            reparationer och ombyggnation av hissar.
          </h2>
          <p>
            Vår målsättning är att vara nära våra kunder för att kunna se deras
            behov, då har vi också möjlighet att skapa de lösningar som kunden
            efterfrågar. Vi tror också på korta beslutsvägar och låga
            omkostnader, detta för att vara så kostnadseffektiva som möjligt.
          </p>

          <p>
            Vi ser det som en utmaning att alltid bistå våra kunder med mer än
            vad som förväntas, med målsättningen att överträffa våra kunders
            förväntningar.
          </p>

          <p>
            Genom att välja Trygga Hiss som en samarbetspartner får man på en
            och samma gång god kvalitet, god service, den bästa ekonomiska
            lösningen och en flexibilitet inför framtiden!
          </p>
        </section>
        <div className="aboutUs__photo">
          <img src={groupPicture} alt="Staff" />
        </div>
      </main>
    );
  }
}

export default AboutUs;
