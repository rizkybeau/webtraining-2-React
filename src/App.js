/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AboutUs, Steps, Footer, Header } from './container';
import { Navbar } from './components';
import { images } from './constant';

import './App.css';
const App = () => {
  const mystyle = {
    width: '100%',
    height: '119px',
    background: '#130b2b',
  };
  const gridstyle = {
    display: 'grid',
    width: '100%',
  };
  //jsx code
  return (
    <div>
      <Navbar />
      <Header />
      <div className="Hello">Hello React</div>
      <AboutUs />
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
