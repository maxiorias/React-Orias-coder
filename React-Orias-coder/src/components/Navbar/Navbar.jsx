import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Home, ShoppingBasket, Email } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = ({ cartItems }) => {
  return (
    <AppBar position="static" className="navbar" sx={{ backgroundColor: '#333333' }}>
      <Toolbar>
        <img src="../public/kitsune.png" alt="Logo" className="navbar__logo" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Kitsune
        </Typography>

        <nav className="navbar__nav">
          <Link className="navbar__link" to="/">
            <Home sx={{ mr: 1 }} />
            Inicio
          </Link>
          <Link className="navbar__link" to="/Productos">
            <ShoppingBasket sx={{ mr: 1 }} />
            Productos
          </Link>
          <Link className="navbar__link" to="/Contacto">
            <Email sx={{ mr: 1 }} />
            Contacto
          </Link>
        </nav>
        <CartWidget cartItems={cartItems} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;