import React, { useState } from "react";
import "./cal.scss";

const Cal = () => {
  //States
  const [current, setCurrent] = useState("");
  const [viewNumber, setViewNumber] = useState(0);
  const [operator, setOperator] = useState("");

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
    switch (operator) {
      case "+":
        setCurrent(
          current !== "" ? parseInt(current) + parseInt(number) : number
        );
        setViewNumber(number);
        break;
      case "-":
        setCurrent(
          current !== "" ? parseInt(current) - parseInt(number) : number
        );
        setViewNumber(number);
        break;
      case "*":
        setCurrent(
          current !== "" ? parseInt(current) * parseInt(number) : number
        );
        setViewNumber(number);
        break;
      case "/":
        setCurrent(
          current !== "" ? parseInt(current) / parseInt(number) : number
        );
        setViewNumber(number);
        break;
      default:
        setViewNumber(number);
        setCurrent(number);
        break;
    }
  };
  //Dot method
  const dot = () => {
    if (current.indexOf(".") === -1) {
      append(".");
    }
  };

  //Divide method
  const divide = () => {
    setOperator("/");
  };

  //Times method
  const times = () => {
    setOperator("*");
  };

  //Minus method
  const minus = () => {
    setOperator("-");
  };

  //Add method
  const add = () => {
    setOperator("+");
  };

  //Equal method
  const equal = () => {
    setOperator(parseFloat(current));
    setViewNumber(current);
  };
  return (
    <div className="calculator">
      <div className="display">{viewNumber}</div>
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
