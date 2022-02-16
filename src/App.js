import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './Pages/Calculator';
import Quote from './Pages/Quote';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

import './index.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
    <Footer />
  </div>
);
export default App;
