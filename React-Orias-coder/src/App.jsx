import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import theme from './theme';
import './App.css';
import '../src/components/ItemListContainer.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Navbar />
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda de ropa!" />
      </div>
    </ThemeProvider>
  );
}

export default App;