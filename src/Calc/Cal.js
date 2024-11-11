import'../Calc/Cal.css'
import React, { useState } from "react";
import { evaluate } from "mathjs"; // Import the evaluate function from math.js

function Calculator() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const appendToDisplay = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const calculateResult = () => {
    try {
      if (display === "") {
        setResult("Error");
      } else {
         
        let result = evaluate(display);

         
        if (Number.isNaN(result)) {
          setResult("NaN");
        } 
         
        else if (result === Infinity) {
          setResult("Infinity");
        } else {
          setResult(String(result));  
        }
      }
    } catch (error) {
      setDisplay("Error");
    }
  };

  const clearDisplay = () => {
    setDisplay("");
    setResult("");
  };

  return (
    <div className="calculator">
        <h1>React Calculator</h1>
      <input
        type="text"
        value={display}
        readOnly
        
        className="display"
      />
      <div style={{marginTop:"10px",  textAlign:"center"}}>{result}</div>
      <div className="buttons">
        <button onClick={() => appendToDisplay("7")}>7</button> 
        <button onClick={() => appendToDisplay("8")}>8</button>
        <button onClick={() => appendToDisplay("9")}>9</button>
        <button onClick={() => appendToDisplay("+")}>+</button>

        <button onClick={() => appendToDisplay("4")}>4</button>
        <button onClick={() => appendToDisplay("5")}>5</button>
        <button onClick={() => appendToDisplay("6")}>6</button>
        <button onClick={() => appendToDisplay("-")}>-</button>

        <button onClick={() => appendToDisplay("1")}>1</button>
        <button onClick={() => appendToDisplay("2")}>2</button>
        <button onClick={() => appendToDisplay("3")}>3</button>
        <button onClick={() => appendToDisplay("*")}>*</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => appendToDisplay("0")}>0</button>
         
        <button onClick={calculateResult}>=</button>
        <button onClick={() => appendToDisplay("/")}>/</button>

        
      </div>
    </div>
  );
}

export default Calculator;
