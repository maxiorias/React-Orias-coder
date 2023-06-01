import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Slider from './components/Slider';
import Product from './components/products'; 
import theme from './theme';
import './App.css';
import '../src/components/ItemListContainer.css';
import '../src/components/Slider.css';

const products = [
  { id: 1, name: 'Producto 1', price: 10.99, image: '../public/product1.jpg' },
  { id: 2, name: 'Producto 2', price: 15.99, image: '../public/product1.jpg' },
  { id: 3, name: 'Producto 3', price: 12.99, image: '../public/product1.jpg' },
  { id: 4, name: 'Producto 4', price: 9.99, image: '../public/product1.jpg' },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Navbar />
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda de ropa!" />
        <Slider />
        <Product products={products} /> 
      </div>
    </ThemeProvider>
  );
}

export default App;