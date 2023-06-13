import React from 'react';
import { TextField, Button } from '@mui/material';
import './Formulario.css';

const Formulario = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log('Formulario enviado');
  };

  return (
    <div className='contactSection'>
      <h2 className='contactTitle'>Contáctenos</h2>
      <div className='parentContainer'>
        <form className='formularioContainer' onSubmit={handleSubmit}>
          <TextField label="Nombre" variant="outlined" className="inputField" />
          <TextField label="Email" variant="outlined" className="inputField" />
          <TextField label="Contraseña" variant="outlined" type="password" className="inputField" />
          <Button variant="contained" color="primary" type="submit" className="submitButton">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;