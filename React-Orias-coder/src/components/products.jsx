import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import TabComponent from './Tabs';
import products from './products.json';
import './products.css';


const ProductSection = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      if (selectedCategory === 'all') {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter((product) => product.category === selectedCategory);
        setFilteredProducts(filtered);
      }
    };

    filterProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="product-section">
      <div className="category-selector">
        <button
          className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('all')}
        >
          Todas
        </button>
        <button
          className={`category-button ${selectedCategory === 'remeras' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('remeras')}
        >
          Remeras
        </button>
        <button
          className={`category-button ${selectedCategory === 'camisas' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('camisas')}
        >
          Camisas
        </button>
        <button
          className={`category-button ${selectedCategory === 'gorras' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('gorras')}
        >
          Gorras
        </button>
        <button
          className={`category-button ${selectedCategory === 'lentes' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('lentes')}
        >
          Lentes
        </button>
      </div>
      {isLoading ? (
        <div className="loading-message">Cargando...</div>
      ) : (
        <Grid container spacing={2}>
          {filteredProducts.map((product) => (
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
                <Button variant="contained" style={{ backgroundColor: "#cc512b", color: "#ffffff" }}>
                  Agregar al carrito
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ProductSection;