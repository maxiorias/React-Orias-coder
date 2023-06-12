import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Slider from './components/Slider';
import ProductSection from './components/Products'; // Actualización del nombre del componente
import Formulario from './components/Formulario';
import theme from './theme';
import './App.css';
import './components/ItemListContainer.css'; // Actualización de la ruta del archivo
import './components/Slider.css'; // Actualización de la ruta del archivo
import './components/Formulario.css'; // Actualización de la ruta del archivo

const App = () => { 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Navbar />
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda de ropa!" />
        <Slider />
        <ProductSection /> 
        <Formulario />
      </div>
    </ThemeProvider>
  );
}

export default App;