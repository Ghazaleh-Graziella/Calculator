import React, { useState } from "react";
import "./cal.scss";

const Cal = () => {
  //States
  const [current, setCurrent] = useState("");

  //AC method
  const clear = () => {
    setCurrent("");
  };

  //Sign method
  const sign = () => {
    setCurrent(current.charAt(0) === "-" ? current.slice(1) : `-${current}`);
  };

  return (
    <div className="calculator">
      <div className="display">{current || "0"}</div>
      <div className="btn" onClick={clear}>
        AC
      </div>
      <div className="btn" onClick={sign}>
        +/-
      </div>
    </div>
  );
};

export default Cal;
