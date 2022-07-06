import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import Home from './home.js';
import {reducer, initialState} from './reducer.js';
import { useFormControlUnstyledContext } from '@mui/base';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const CartContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

export const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <CartContext.Provider value={[state, dispatch]}>
    { children }
  </CartContext.Provider>
}

class App extends React.Component {
  render() {
    return (
      <CartProvider>
        <ThemeProvider theme={darkTheme}>
          <Home/>
        </ThemeProvider>
      </CartProvider>
    );
  }
}

export default App;
