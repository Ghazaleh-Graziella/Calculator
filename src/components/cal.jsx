import React, { useState } from "react";
import "./cal.scss";

const Cal = () => {
  //States
  const [current, setCurrent] = useState("");
  const [operator, setOperator] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [operatorClicked, setOperatorClicked] = useState(false);

  //AC method
  const clear = () => {
    setCurrent("");
  };

  //Sign method
  const sign = () => {
    setCurrent(current.charAt(0) === "-" ? current.slice(1) : `-${current}`);
  };

  //Percent method
  const percent = () => {
    setCurrent(`${parseFloat(current) / 100}`);
  };

  //Divide method
  const divide = () => {
    setOperator((a, b) => a / b);
    setPrevious();
  };

  //Append method
  const append = (number) => {
    if (operatorClicked) {
      setCurrent("");
      setOperatorClicked(false);
    }
    setCurrent(current + number);
  };

  //Times method
  const times = () => {
    setOperator((a, b) => a * b);
    setPrevious();
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
      <div className="btn" onClick={percent}>
        %
      </div>
      <div className="btn operator" onClick={divide}>
        /
      </div>
      <div className="btn" onClick={() => append("7")}>
        7
      </div>
      <div className="btn" onClick={() => append("8")}>
        8
      </div>
      <div className="btn" onClick={() => append("9")}>
        9
      </div>
      <div className="btn operator " onClick={times}>
        *
      </div>
    </div>
  );
};

export default Cal;
