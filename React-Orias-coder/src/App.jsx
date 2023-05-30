import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Slider from './components/Slider';
import theme from './theme';
import './App.css';
import '../src/components/ItemListContainer.css'
import '../src/components/Slider.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Navbar />
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda de ropa!" />
        <Slider />
      </div>
    </ThemeProvider>
  );
}

export default App;