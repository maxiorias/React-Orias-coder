import { createTheme } from '@mui/material/styles';

// Define tu objeto de tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ee',
    },
    secondary: {
      main: '#03dac6',
    },
  },
  // Aquí puedes agregar más opciones de configuración de tu tema
});

export default theme;