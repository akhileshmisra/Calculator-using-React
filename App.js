import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  // Handle button click
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle clearing the input field
  const handleClear = () => {
    setInput("");
  };

  // Handle calculating the result
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1 className="calculator-title">Simple Calculator</h1>{" "}
      {/* Calculator Title */}
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("")}></button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
      <footer className="footer">Developed by Akhilesh Misra</footer>{" "}
      {/* Footer with Developer Name */}
    </div>
  );
}

export default App;
