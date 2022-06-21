import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="lds-container">
      <div className="lds-hourglass"></div>
    </div>
  );
};

export default Loader;
