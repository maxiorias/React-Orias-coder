import React from 'react';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="error-container">
      <h2 className="error-title">404 not found</h2>
        <h3 className="error-text">Pensé que lo había puesto aquí...</h3>
      <div className="error-image">
        <img src="./public/404.webp" alt="Error 404" />
      </div>
    </div>
  );
};

export default Error404;