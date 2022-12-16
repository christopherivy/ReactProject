import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <>
      <h1 style={pageStyle}>Loading...</h1>
      <img src={spinner} alt="Loading..." style={pageStyle} />
    </>
  );
};

const pageStyle = {
  width: "200px",
  margin: "auto",
  display: "block",
};

export default Spinner;
