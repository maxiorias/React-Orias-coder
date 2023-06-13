import React, { useState } from 'react';
import { Grid, Card, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

import products from './products.json';
import './products.css';

const ProductSection = ({ addToCart }) => { // Agregamos una nueva prop "addToCart" al componente
  const [productQuantities, setProductQuantities] = useState({}); // Estado para almacenar la cantidad de unidades por producto

  const handleUnitChange = (productId, action) => {
    const currentQuantity = productQuantities[productId] || 0;

    if (action === 'add') {
      // Agregar una unidad
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: currentQuantity + 1,
      }));
    } else if (action === 'remove') {
      // Remover una unidad si hay al menos una unidad
      if (currentQuantity > 0) {
        setProductQuantities((prevQuantities) => ({
          ...prevQuantities,
          [productId]: currentQuantity - 1,
        }));
      }
    }
  };

  const handleBuy = (productId) => {
    addToCart(productId); // Llamamos a la función addToCart y pasamos el productId
  };

  return (
    <div className="product-section">
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <img src={product.image} alt={product.name} className="product-image" />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" component="div">
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  style={{ backgroundColor: "#cc512b", color: "#ffffff" }}
                  aria-label="Agregar unidad"
                  onClick={() => handleUnitChange(product.id, 'add')}
                >
                  <AddCircleOutline />
                </IconButton>
                <Typography variant="body1" component="div">
                  {productQuantities[product.id] || 0} {/* Mostrar cantidad de unidades */}
                </Typography>
                <IconButton
                  style={{ backgroundColor: "#cc512b", color: "#ffffff" }}
                  aria-label="Remover unidad"
                  onClick={() => handleUnitChange(product.id, 'remove')}
                >
                  <RemoveCircleOutline />
                </IconButton>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#cc512b", color: "#ffffff" }}
                  onClick={() => handleBuy(product.id)}
                >
                  Comprar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductSection;