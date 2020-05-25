import React from "react";
import "./App.scss";

// Components
import Header from "./components/header";
import Footer from "./components/footer";
import AboutUs from "./components/about_us";
import Services from "./components/services";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
