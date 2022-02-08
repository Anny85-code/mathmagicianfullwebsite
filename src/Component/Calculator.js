import React, { useState } from 'react';

const Calculator = () => {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const operator = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {
    if (
      (operator.includes(value) && calc === '')
      || (operator.includes(value) && operator.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
    if (!operator.includes(value)) {
      setResult(Function(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 9; i > 0; i -= 1) {
      digits.push(
        <button type="submit" onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>,
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(Function(calc).toString());
  };

  const deleteLast = () => {
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? (
            <span>
              (
              {result}
              )
            </span>
          ) : ''}
          &nbsp;
          {calc || '0'}
        </div>
        <div className="operator-digits-container">
          <div className="operators">
            <button type="submit" onClick={() => updateCalc('/')}>/</button>
            <button type="submit" onClick={() => updateCalc('*')}>*</button>
            <button type="submit" onClick={() => updateCalc('+')}>+</button>
            <button type="submit" onClick={() => updateCalc('-')}>-</button>
            <button type="submit" onClick={calculate}>=</button>
          </div>
          <div className="digits">
            <button type="submit" onClick={deleteLast}>A/C</button>
            <button type="submit" onClick={deleteLast}>+/-</button>
            <button type="submit" onClick={deleteLast}>%</button>
            {createDigits()}
            <button type="submit" onClick={() => updateCalc('0')}>0</button>
            <button type="submit" onClick={() => updateCalc('.')}>.</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
