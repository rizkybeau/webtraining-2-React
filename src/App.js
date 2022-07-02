/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AboutUs, Steps, Footer } from './container';
import { Navbar } from './components';
import { images } from './constant';

import './App.css';
const App = () => {
  const mystyle = {
    width: '300px',
    height: '319px',
    background: '#130b2b',
  };
  const gridstyle = {
    display: 'grid',
  };
  return (
    <div>
      <Navbar />
      <div className="Hello">Hello React</div>
      <AboutUs />
      <Steps />
      <Steps />
      <Steps />
      <Steps />
      <Steps />
      <Steps />
      <Steps />
      <div style={gridstyle}>
        <img src={images.gericht} alt="footer_logo" style={mystyle} />
        <img src={images.gericht} alt="footer_logo" style={mystyle} />
        <img src={images.gericht} alt="footer_logo" style={mystyle} />
      </div>

      <Footer />
    </div>
  );
};

export default App;
