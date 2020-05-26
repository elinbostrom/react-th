import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Menubar dissapears when scroll down and appears when you scroll up
let scrollPosition = window.pageYOffset;

window.onscroll = () => {
  let exactScrollPosition = window.pageYOffset;
  scrollPosition > exactScrollPosition
    ? (document.querySelector(".menu").getElementsByClassName.top = "0")
    : (document.querySelector(".menu").getElementsByClassName.top = "-100px");
  scrollPosition = exactScrollPosition;
};
