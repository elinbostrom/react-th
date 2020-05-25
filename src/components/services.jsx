import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faPhoneVolume,
  faCogs,
  faSync,
} from "@fortawesome/free-solid-svg-icons";

class Services extends React.Component {
  render() {
    return (
      <section className="services" id="services">
        <h2>Tjänster</h2>
        <div className="services__articles">
          <articles className="underhall">
            <FontAwesomeIcon
              icon={faCogs}
              color="#F08585"
              style={{ fontSize: "40px", marginBottom: "0.5em" }}
            />
            <h3>Underhållsservice</h3>
            <p>
              Genom att utföra löpande service regelbundet ser vi till att
              hissen får ett optimerat underhåll vilket gör att felfrekvensen
              minskar. Vi anpassar våra serivceavtal enligt kundens önskemål.
              Tillgång till jourtjänst finns dygnet runt.
            </p>
          </articles>
          <articles className="reparation">
            <FontAwesomeIcon
              icon={faTools}
              color="rgb(255, 204, 0)"
              style={{ fontSize: "40px", marginBottom: "0.5em" }}
            />
            <h3>Reparationer</h3>
            <p>
              Vi utför alla typer av reparationer. När helst ett problem uppstår
              står vi till ert förfogande och åtgärdar exempelvis besiktnings-
              anmärkningar. Vi tillhandahåller reservdelar till alla på marknade
              förekommande hissfabrikat.
            </p>
          </articles>
          <articles className="emergency">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              color="#9FE99D"
              style={{ fontSize: "40px", marginBottom: "0.5em" }}
            />
            <h3>Nödtelefoner & Trygghetssystem</h3>
            <p>
              Vi erbjuder installation och service av nödtelefoner samt sköter
              larmmottagningen till egen larmcentral, dygnet runt.
            </p>
          </articles>
          <articles className="modern">
            <FontAwesomeIcon
              icon={faSync}
              color="#9BC4E2"
              style={{ fontSize: "40px", marginBottom: "0.5em" }}
            />
            <h3>Ombyggnation & Modernisering</h3>
            <p>
              Alla hissar slits och behöver förr eller senare rustas upp. För
              att uppfylla de nya kraven erbjuder vi utbyte av styrsystem och
              korgdörrar. Vi monterar energisnåla växellösa hissmaskiner och
              renoverar hisskorgar.
            </p>
            <p>
              Vi levererar även kompletta paket för modernisering av
              hydraulhissar. Vi hjälper våra kunder att ta fram åtgärdsförslag
              och budgetunderlag för hissanläggningar, allt enligt kundens behov
              och önskemål.
            </p>
          </articles>
        </div>
      </section>
    );
  }
}

export default Services;
