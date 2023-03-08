import React, { useState } from 'react';
import calculate from '../logic/calculate';

const initialState = { total: 0, next: '', operation: '' };
const Calculator = () => {
  const [state, setState] = useState(initialState);

  const handleNumberClick = (e) => {
    const response = calculate(state, e.target.textContent);
    setState(response);
  };

  return (
    <div className="calcMain">
      <h2 className="letsDo">Let&#39;s do some math&#33;</h2>
      <div className="calc-box">
        <div className="calc-div">
          <div id="answer" className="answer">
            {state.total}
            {state.operation}
            {state.next}
          </div>
          <button type="button" onClick={handleNumberClick} id="reset" className="special">AC</button>
          <button type="button" onClick={handleNumberClick} id="plus-or-minus" className="special">+/-</button>
          <button type="button" onClick={handleNumberClick} id="percent" className="special">%</button>
          <button type="button" onClick={handleNumberClick} id="divide-by" className="operand">÷</button>
          <button type="button" onClick={handleNumberClick} id="7" className="num">7</button>
          <button type="button" onClick={handleNumberClick} id="8" className="num">8</button>
          <button type="button" onClick={handleNumberClick} id="9" className="num">9</button>
          <button type="button" onClick={handleNumberClick} id="times" className="operand">x</button>
          <button type="button" onClick={handleNumberClick} id="4" className="num">4</button>
          <button type="button" onClick={handleNumberClick} id="5" className="num">5</button>
          <button type="button" onClick={handleNumberClick} id="6" className="num">6</button>
          <button type="button" onClick={handleNumberClick} id="minus" className="operand">-</button>
          <button type="button" onClick={handleNumberClick} id="1" className="num">1</button>
          <button type="button" onClick={handleNumberClick} id="2" className="num">2</button>
          <button type="button" onClick={handleNumberClick} id="3" className="num">3</button>
          <button type="button" onClick={handleNumberClick} id="plus" className="operand">+</button>
          <button type="button" onClick={handleNumberClick} id="zero" className="num">0</button>
          <button type="button" onClick={handleNumberClick} id="dot" className="special">.</button>
          <button type="button" onClick={handleNumberClick} id="equal-to" className="operand">=</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
