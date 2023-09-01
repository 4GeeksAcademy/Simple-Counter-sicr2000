//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let seconds = 0;
function nextSecond() {
  seconds++;
  ReactDOM.render(
    <Home loadSeconds={seconds} />,
    document.querySelector("#app")
  );
}

window.onload = () => {
  ReactDOM.render(<Home loadSeconds={0} />, document.querySelector("#app"));
  setInterval(nextSecond, 1000);
};
