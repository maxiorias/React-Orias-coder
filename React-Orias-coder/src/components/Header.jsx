import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
     

      <AppBar position="static" className='header' sx={{ backgroundColor: '#333333' }} >
        <Toolbar>
        <img src="../public/vite.svg"alt="Logo" className="header__logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1  }}>
            Kitsune
          </Typography>
  
          <nav className="header__nav">
            <a className="header__link" href="#">
              Inicio
            </a>
            <a className="header__link" href="#">
              Productos
            </a>
            <a className="header__link" href="#">
              Contacto
            </a>
          </nav>
        </Toolbar>
      </AppBar>
    
    );
  };
  
  export default Header;