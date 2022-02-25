import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './Pages/Calculator';
import Quote from './Pages/Quote';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import './index.css';

const App = () => {
  const myStyle = {
    backgroundImage: `linear-gradient(
      to right,
      rgba(218, 165, 32, 0.65),
      rgba(238, 82, 60, 0.65)
    ),url(${`${process.env.PUBLIC_URL}/math-image-3.jpg`})`,
    height: '100vh',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="App" style={myStyle}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
