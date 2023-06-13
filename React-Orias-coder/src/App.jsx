import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Slider from './components/Slider';
import ProductSection from './components/Products';
import Formulario from './components/Formulario';
import CartWidget from './components/CartWidget';
import theme from './theme';
import './App.css';
import './components/ItemListContainer.css';
import './components/Slider.css';
import './components/Formulario.css';

const App = () => {
  const [cartItems, setCartItems] = useState(0); // Estado para almacenar el número de elementos en el carrito

  const addToCart = (productId) => {
    setCartItems((prevItems) => prevItems + 1);
    // Aquí puedes realizar cualquier otra lógica adicional relacionada con agregar el producto al carrito
  };

  return (
    <BrowserRouter>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Navbar />

        <Routes>
    
        <Route path="/" element={
            <>
              <ItemListContainer greeting="¡Bienvenido a nuestra tienda de ropa!" />
              <Slider />
            </>
        } />
        {/* <ProductSection />
        <Formulario />
        <CartWidget /> */}

        </Routes>
      </div>
    </ThemeProvider>

    </BrowserRouter>

  );
};

export default App;