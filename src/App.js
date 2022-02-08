import React from 'react';
import Calculator from './Component/Calculator';
import './index.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
export default App;
