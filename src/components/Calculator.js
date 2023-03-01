import React, { useState } from 'react';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('0');

  const handleNumberClick = (e) => {
    const clickedNumber = parseFloat(e.target.textContent);
    setInputValue((prevInputValue) => prevInputValue + clickedNumber);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (

    <div className="calc-box">
      <div className="calc-div">
        <input id="answer" className="answer" value={inputValue} onChange={handleChange} />
        <button type="button" id="reset" className="special">AC</button>
        <button type="button" id="plus-or-minus" className="special">+/-</button>
        <button type="button" id="percent" className="special">%</button>
        <button type="button" id="divide-by" className="operand">÷</button>
        <button type="button" onClick={handleNumberClick} id="7" className="num">7</button>
        <button type="button" onClick={handleNumberClick} id="8" className="num">8</button>
        <button type="button" onClick={handleNumberClick} id="9" className="num">9</button>
        <button type="button" id="times" className="operand">x</button>
        <button type="button" onClick={handleNumberClick} id="4" className="num">4</button>
        <button type="button" onClick={handleNumberClick} id="5" className="num">5</button>
        <button type="button" onClick={handleNumberClick} id="6" className="num">6</button>
        <button type="button" id="minus" className="operand">-</button>
        <button type="button" onClick={handleNumberClick} id="1" className="num">1</button>
        <button type="button" onClick={handleNumberClick} id="2" className="num">2</button>
        <button type="button" onClick={handleNumberClick} id="3" className="num">3</button>
        <button type="button" id="plus" className="operand">+</button>
        <button type="button" onClick={handleNumberClick} id="zero" className="num">0</button>
        <button type="button" id="dot" className="special">.</button>
        <button type="button" id="equal-to" className="operand">=</button>
      </div>
    </div>
  );
};
export default Calculator;
