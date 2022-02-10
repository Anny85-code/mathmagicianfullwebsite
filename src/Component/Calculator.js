import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const result = calculate(data, e.target.textContent);
    setData(result);
  };

  const { total, next, operation } = data;
  const result = `${total || ''} ${operation || ''} ${next || ''}`;
  const createDigits = () => {
    const digits = [];
    for (let i = 9; i > 0; i -= 1) {
      digits.push(
        <button id="numbers" type="submit" onClick={handleClick} key={i}>
          {i}
        </button>,
      );
    }
    return digits;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>{result.trim() ? result : 0}</span>
        </div>
        <div className="operator-digits-container">
          <div className="digits">
            <button type="submit" onClick={handleClick}>
              AC
            </button>
            <button type="submit" onClick={handleClick}>
              +/-
            </button>
            <button type="submit" onClick={handleClick}>
              %
            </button>
            {createDigits()}
            <button id="zero" type="submit" onClick={handleClick}>
              0
            </button>
            <button type="submit" onClick={handleClick}>
              .
            </button>
          </div>
          <div className="operators">
            <button type="submit" onClick={handleClick}>
              ÷
            </button>
            <button type="submit" onClick={handleClick}>
              x
            </button>
            <button type="submit" onClick={handleClick}>
              +
            </button>
            <button type="submit" onClick={handleClick}>
              -
            </button>
            <button type="submit" onClick={handleClick}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
