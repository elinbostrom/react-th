import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router";

// Components
import Header from "./components/header";
import Footer from "./components/footer";
import AboutUs from "./components/about_us";
import Services from "./components/services";
import Contact from "./components/contact";
import Navbar from "./components/nav/navbar";
import { Tools } from "./components/tools";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/verktyg">
          <Tools />
        </Route>
        <Route path="/kontakt">
          <Navbar />
          <Contact />
        </Route>
        <Route path="/">
          <Header />
          <AboutUs />
          <Services />
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
