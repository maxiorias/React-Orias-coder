import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

import products from './products.json';
import './products.css';

const ProductSection = ({ addToCart }) => {
  const [productQuantities, setProductQuantities] = useState({});
  const [selectedImages, setSelectedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleUnitChange = (productId, action) => {
    const currentQuantity = productQuantities[productId] || 0;

    if (action === 'add') {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: currentQuantity + 1,
      }));
    } else if (action === 'remove') {
      if (currentQuantity > 0) {
        setProductQuantities((prevQuantities) => ({
          ...prevQuantities,
          [productId]: currentQuantity - 1,
        }));
      }
    }
  };

  const handleBuy = (productId) => {
    addToCart(productId);
  };

  const handleImageUpload = (productId, event) => {
    const file = event.target.files[0];
    setSelectedImages((prevImages) => ({
      ...prevImages,
      [productId]: file,
    }));
  };

  useEffect(() => {
    // Simulación de una carga inicial
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="product-section">
      {isLoading ? (
        <div className="loading-message">Cargando...</div>
      ) : (
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
                    {productQuantities[product.id] || 0}
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
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e) => handleImageUpload(product.id, e)}
                  />
                  <IconButton
                    style={{ backgroundColor: "#cc512b", color: "#ffffff" }}
                    aria-label="Cargar imagen"
                    component="label"
                  >
                    <AddCircleOutline />
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(product.id, e)} hidden />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ProductSection;