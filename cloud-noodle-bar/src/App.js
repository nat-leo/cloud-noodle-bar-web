import React, { useState } from 'react';

import './App.css';
import Home from './HomePage/home.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  render() {
    return (
      <Home/>
    );
  }
}

export default App;
