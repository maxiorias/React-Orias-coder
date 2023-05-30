import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const tendencias = [
    { nombre: 'Camisas', imagen: '../public/camisa.jpg' },
    { nombre: 'Sacos', imagen: '../public/sacos.jpg' },
    { nombre: 'Gorras', imagen: '../public/gorras.jpg' },
    { nombre: 'Remeras', imagen: '../public/remera.jpg' },
  ];

  return (
    <div className={`item-list-container full-width-container`}>
      <h2 className="title">{greeting}</h2>
      <h3>Tendencias</h3>
      <List className="trends-list">
        {tendencias.map((tendencia, index) => (
          <ListItem key={index} className="trend-item">
            <ListItemAvatar>
              <Avatar className="trend-item-image-custom" alt={tendencia.nombre} src={tendencia.imagen} />
            </ListItemAvatar>
            <ListItemText primary={tendencia.nombre} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ItemListContainer;