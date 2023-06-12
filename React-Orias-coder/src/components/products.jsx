import React from 'react';
import { Grid, Card, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import './products.css';

const ProductSection = () => {
  const products = [
    { id: 1, name: 'Producto 1', price: 10.99, image: '../public/product1.webp' },
    { id: 2, name: 'Producto 2', price: 15.99, image: '../public/product2.webp' },
    { id: 3, name: 'Producto 3', price: 12.99, image: '../public/product3.webp' },
    { id: 4, name: 'Producto 4', price: 9.99, image: '../public/product4.webp' },
    { id: 5, name: 'Producto 1', price: 10.99, image: '../public/product5.webp' },
    { id: 6, name: 'Producto 2', price: 15.99, image: '../public/product6.webp' },
    { id: 7, name: 'Producto 3', price: 12.99, image: '../public/product7.webp' },
    { id: 8, name: 'Producto 4', price: 9.99, image: '../public/product8.webp' },
    { id: 9, name: 'Producto 1', price: 10.99, image: '../public/product9.webp' },
    { id: 10, name: 'Producto 2', price: 15.99, image: '../public/product10.webp' },
    { id: 11, name: 'Producto 3', price: 12.99, image: '../public/product11.webp' },
    { id: 12, name: 'Producto 4', price: 9.99, image: '../public/product12.webp' },
  ];

  const handleUnitChange = (productId, action) => {
    // Implementar lógica para cambiar la cantidad de unidades del producto con el productId
    console.log(`Cambiar unidades del producto con ID ${productId}, acción: ${action}`);
  };

  const handleBuy = (productId) => {
    // Implementar lógica para comprar el producto con el productId
    console.log(`Comprar producto con ID ${productId}`);
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
                  {/* Mostrar cantidad de unidades */}
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