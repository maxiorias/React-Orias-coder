import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
     

      <AppBar position="static" className='navbar' sx={{ backgroundColor: '#333333' }} >
        <Toolbar>
        <img src="../public/kitsune.png"alt="Logo" className="navbar__logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1  }}>
            Kitsune
          </Typography>
  
          <nav className="navbar__nav">
            <a className="navbar__link" href="#">
              Inicio
            </a>
            <a className="navbar__link" href="#">
              Productos
            </a>
            <a className="navbar__link" href="#">
              Contacto
            </a>
          </nav>
          <CartWidget />
        </Toolbar>
      </AppBar>
    
    );
  };
  
  export default Navbar;