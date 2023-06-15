import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import TabComponent from './Tabs';
import products from './products.json';
import './products.css';


const ProductSection = ({ addToCart }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { category } = useParams();

  const handleBuy = (productId) => {
    addToCart(productId);
  };

  useEffect(() => {
    // Simulación de una carga inicial
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (category) {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [category]);

  return (
    <div className="product-section" style={{ backgroundColor: '#cccccc' }}>
      {isLoading ? (
        <div className="loading-message" style={{ backgroundColor: '#fff' }}>
          Cargando...
        </div>
      ) : (
        <Grid container spacing={2}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card>
                <img src={product.image} alt={product.name} className="product-image" />
                <CardContent className="card-content">
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    ${product.price}
                  </Typography>
                </CardContent>
                <div className="button-container">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: '#cc512b', color: '#ffffff' }}
                    onClick={() => handleBuy(product.id)}
                  >
                    Agregar al carrito
                  </Button>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ProductSection;