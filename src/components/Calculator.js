const Calculator = () => (
  <div className="calc-box">
    <div className="calc-div">
      <button type="button" id="answer" className="answer">0</button>
      <button type="button" id="reset" className="special">AC</button>
      <button type="button" id="plus-or-minus" className="special">+/-</button>
      <button type="button" id="percent" className="special">%</button>
      <button type="button" id="divide-by" className="operand">÷</button>
      <button type="button" id="7" className="num">7</button>
      <button type="button" id="8" className="num">8</button>
      <button type="button" id="9" className="num">9</button>
      <button type="button" id="times" className="operand">x</button>
      <button type="button" id="4" className="num">4</button>
      <button type="button" id="5" className="num">5</button>
      <button type="button" id="6" className="num">6</button>
      <button type="button" id="minus" className="operand">-</button>
      <button type="button" id="1" className="num">1</button>
      <button type="button" id="2" className="num">2</button>
      <button type="button" id="3" className="num">3</button>
      <button type="button" id="plus" className="operand">+</button>
      <button type="button" id="zero" className="num">0</button>
      <button type="button" id="dot" className="special">.</button>
      <button type="button" id="equal-to" className="operand">=</button>
    </div>
  </div>
);
export default Calculator;
