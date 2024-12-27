import React, { useState } from "react";
import { evaluate } from "mathjs"; // Import mathjs evaluate function
import "./Calcul.css";
import Navbar from "../Home";

function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.value);
  };

  const handleClear = () => setValue("");
  const handleDelete = () => setValue(value.slice(0, -1));

  const handleEqual = () => {
    try {
      // Use math.js to evaluate the expression
      setValue(evaluate(value).toString());
    } catch {
      setValue("Error");
    }
  };

  return (
  <div>
    <Navbar/>

    <div className="calculator-body">
        <div className="calculator">
      <div className="display">{value || "0"}</div>
      <div className="buttons">
        <button className="action" onClick={handleClear}>AC</button>
        <button className="action" onClick={handleDelete}>DEL</button>
        <button className="operator" value="(" onClick={handleClick}> ( </button>
        <button className="operator" value=")" onClick={handleClick}> ) </button>

        <button className="function" value="^" onClick={handleClick}> ^ </button>
    
    <button className="function" value="sqrt(" onClick={handleClick}> √ </button>
    <button className="number" value="%" onClick={handleClick}> % </button>
       
        <button className="operator" value="/" onClick={handleClick}> ÷ </button>

        <button className="number" value="4" onClick={handleClick}> 4 </button>
        <button className="number" value="5" onClick={handleClick}> 5 </button>
        <button className="number" value="6" onClick={handleClick}> 6 </button>
        <button className="operator" value="*" onClick={handleClick}> × </button>

        <button className="number" value="1" onClick={handleClick}> 1 </button>
        <button className="number" value="2" onClick={handleClick}> 2 </button>
        <button className="number" value="3" onClick={handleClick}> 3 </button>
        <button className="operator" value="-" onClick={handleClick}> - </button>

        <button className="number" value="7" onClick={handleClick}> 7 </button>
        <button className="number" value="8" onClick={handleClick}> 8 </button>
        <button className="number" value="9" onClick={handleClick}> 9 </button>
      
        <button className="operator" value="+" onClick={handleClick}> + </button>
        <button className="zero" value="0" onClick={handleClick}> 0 </button>
        <button className="number" value="." onClick={handleClick}> . </button>
       

        <button className="equal" onClick={handleEqual}> = </button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Calculator;
