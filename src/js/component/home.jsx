import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//create your first component
const Home = (props) => {
  let digitsView = [];
  const secondsDigits = String(props.loadSeconds).padStart(6, "0");
  for (const digit of secondsDigits) {
    digitsView = digitsView.concat(
      <div
        className="border border-white rounded-2 px-3 mx-1"
        style={{ fontFamily: "monospace", fontSize: "70px" }}
      >
        {digit}
      </div>
    );
  }

  return (
    <div
      className="d-flex justify-content-center text-center text-white col-6 m-auto"
      style={{ backgroundColor: "black", padding: "40px" }}
    >
      <div
        className="border border-white rounded-2 px-3 mx-1"
        style={{ fontSize: "70px" }}
      >
        <FontAwesomeIcon icon={faClock} />
      </div>
      {digitsView}
    </div>
  );
};

export default Home;
