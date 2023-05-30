import React from 'react';

const ItemListContainer = ({ greeting }) => {
  
  const tendencias = ['Camisas', 'Camperas', 'Gorras', 'Remeras'];

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <h3>tendencias</h3>
      <ul>
        {tendencias.map((tendencia, index) => (
          <li key={index}>{tendencia}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;