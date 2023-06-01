import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { LocalShipping, CreditCard, Info, Security } from '@mui/icons-material';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const tendencias = [
    { nombre: 'Envios a todo el pais', icono: <LocalShipping style={{ color: '#cc512b'  }}  /> },
    { nombre: 'Cuotas sin interes', icono: <CreditCard style={{ color: '#cc512b' }}/> },
    { nombre: 'Info', icono: <Info style={{ color: '#cc512b' }}/> },
    { nombre: 'Compra segura', icono: <Security style={{ color: '#cc512b' }}/> },
  ];

  return (
    <div className={`item-list-container full-width-container`}>
      <h2 className="title">{greeting}</h2>
      <List className="trends-list">
        {tendencias.map((tendencia, index) => (
          <ListItem key={index} className="trend-item">
            <ListItemAvatar>
              <Avatar className="trend-item-icon-custom">{tendencia.icono}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={tendencia.nombre} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ItemListContainer;