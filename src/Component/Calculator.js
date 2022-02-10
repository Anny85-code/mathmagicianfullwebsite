import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const data = calculate(this.state, e.target.textContent);
    this.setState(data);
  };

  render() {
    const { total, next, operation } = this.state;
    const result = `${total || ''} ${operation || ''} ${next || ''}`;
    const createDigits = () => {
      const digits = [];
      for (let i = 9; i > 0; i -= 1) {
        digits.push(
          <button id="numbers" type="submit" onClick={this.handleClick} key={i}>
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
              <button type="submit" onClick={this.handleClick}>
                AC
              </button>
              <button type="submit" onClick={this.handleClick}>
                +/-
              </button>
              <button type="submit" onClick={this.handleClick}>
                %
              </button>
              {createDigits()}
              <button id="zero" type="submit" onClick={this.handleClick}>
                0
              </button>
              <button type="submit" onClick={this.handleClick}>
                .
              </button>
            </div>
            <div className="operators">
              <button type="submit" onClick={this.handleClick}>
                ÷
              </button>
              <button type="submit" onClick={this.handleClick}>
                x
              </button>
              <button type="submit" onClick={this.handleClick}>
                +
              </button>
              <button type="submit" onClick={this.handleClick}>
                -
              </button>
              <button type="submit" onClick={this.handleClick}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
