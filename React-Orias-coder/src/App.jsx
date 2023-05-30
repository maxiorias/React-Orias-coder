import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import theme from './theme'; // Importa el tema que has creado
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
