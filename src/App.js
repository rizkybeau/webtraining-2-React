/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AboutUs, Steps, Footer, Header, Gallery } from './container';
import { Navbar } from './components';

import './App.css';
const App = () => {
  //jsx code
  return (
    <div>
      <Navbar />
      <Header />

      <AboutUs />
      <Steps />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
