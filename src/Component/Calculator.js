import React from "react";

export default class Calculator extends React.Component {

render(){
  const createDigits = () => {
    const digits = [];
    for (let i = 9; i > 0; i -= 1) {
      digits.push(
        <button
          id='numbers'
          type='submit'
          onClick={() => updateCalc(i.toString())}
          key={i}
        >
          {i}
        </button>
      );
    }
    return digits;
  };
  
  return (
    <div className='App'>
      <div className='calculator'>
        <div className='display'>
          {result ? <span>({result})</span> : ''}
          &nbsp;
          {calc || '0'}
        </div>
        <div className='operator-digits-container'>
          <div className='digits'>
            <button type='submit' onClick={deleteLast}>
              A/C
            </button>
            <button type='submit' onClick={deleteLast}>
              +/-
            </button>
            <button type='submit' onClick={deleteLast}>
              %
            </button>
            {createDigits()}
            <button id='zero' type='submit' onClick={() => updateCalc('0')}>
              0
            </button>
            <button type='submit' onClick={() => updateCalc('.')}>
              .
            </button>
          </div>
          <div className='operators'>
            <button type='submit' onClick={() => updateCalc('/')}>
              /
            </button>
            <button type='submit' onClick={() => updateCalc('*')}>
              *
            </button>
            <button type='submit' onClick={() => updateCalc('+')}>
              +
            </button>
            <button type='submit' onClick={() => updateCalc('-')}>
              -
            </button>
            <button type='submit' onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
};