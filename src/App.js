import React from 'react';
import { AboutUs, Steps } from './container';
import { Navbar } from './components';

import './App.css';
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="Hello">Hello React</div>
      <AboutUs />
      <Steps />
    </div>
  );
};

export default App;
