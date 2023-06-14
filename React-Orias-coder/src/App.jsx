import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Slider from './components/Slider';
import ProductSection from './components/Products';
import CartWidget from './components/CartWidget';
import Formulario from './components/Formulario';
import Error404 from './components/Error404/Error404';
import theme from './theme';
import './App.css';
import './components/ItemListContainer.css';
import './components/Slider.css';
import './components/Formulario.css';

const App = () => {
  const [cartItems, setCartItems] = useState(0); // Estado para almacenar el número de elementos en el carrito

  const addToCart = (productId) => {
    setCartItems((prevItems) => prevItems + 1);
    
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
            <Route path="/Productos" element={<ProductSection />}/> 
            <Route path="/Contacto" element={<Formulario />}/>     
            <Route path='*' element={ <Error404 />} />   
        </Routes>
      </div>
    </ThemeProvider>
    </BrowserRouter>

  );
};

export default App;