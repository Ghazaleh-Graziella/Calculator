import React, { useState } from "react";
import "./cal.scss";

const Cal = () => {
  //States
  const [current, setCurrent] = useState("");
  const [viewNumber, setViewNumber] = useState(0);
  const [operator, setOperator] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [operatorClicked, setOperatorClicked] = useState(false);

  //AC method
  const clear = () => {
    setCurrent("");
    setViewNumber(0);
  };

  //Sign method
  const sign = () => {
    setCurrent(current.charAt(0) === "-" ? current.slice(1) : `-${current}`);
  };

  //Percent method
  const percent = () => {
    setCurrent(`${parseFloat(current) / 100}`);
  };

  //Append method
  const append = (number) => {
    if (operatorClicked) {
      setCurrent("");
      setOperatorClicked(false);
    }
    setViewNumber(number)
  };
  //Dot method
  const dot = () => {
    if (current.indexOf(".") === -1) {
      append(".");
    }
  };

  //SetPrevious method
  const handleSetPrev = () => {
    setPrevious(current);
    setOperatorClicked(true);
  };

  //Divide method
  const divide = () => {
    setOperator((a, b) => a / b);
    handleSetPrev();
  };

  //Times method
  const times = () => {
    setOperator((a, b) => a * b);
    handleSetPrev();
  };

  //Minus method
  const minus = () => {
    setCurrent(current !== "" ? parseInt(current) - parseInt(viewNumber) : viewNumber);
  };

  //Add method
  const add = () => {
    setOperator((a, b) => a + b);
    handleSetPrev();
  };

  //Equal method
  const equal = () => {
    setCurrent(setOperator(parseFloat(current), parseFloat(previous)));
    setViewNumber(current)
    setPrevious(null);
  };
  return (
    <div className="calculator">
      <div className="display">{viewNumber || "0"}</div>
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
      <div className="btn" onClick={() => append("4")}>
        4
      </div>
      <div className="btn" onClick={() => append("5")}>
        5
      </div>
      <div className="btn" onClick={() => append("6")}>
        6
      </div>
      <div className="btn operator " onClick={minus}>
        -
      </div>
      <div className="btn" onClick={() => append("1")}>
        1
      </div>
      <div className="btn" onClick={() => append("2")}>
        2
      </div>
      <div className="btn" onClick={() => append("3")}>
        3
      </div>
      <div className="btn operator " onClick={add}>
        +
      </div>
      <div className="btn zero" onClick={() => append("0")}>
        0
      </div>
      <div className="btn" onClick={dot}>
        .
      </div>
      <div className="btn operator " onClick={equal}>
        =
      </div>
    </div>
  );
};

export default Cal;
