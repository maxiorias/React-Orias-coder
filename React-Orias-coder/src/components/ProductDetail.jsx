import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './products.json';
import './ProductDetail.css'; 

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  const incrementarCantidad = () => {
    setCantidad(prevCantidad => prevCantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(prevCantidad => prevCantidad - 1);
    }
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info-container">
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>
        <p>Categoría: {product.category}</p>
        <p>Descripción: {product.description}</p>
        <div className="quantity-container">
          <button className="quantity-button" onClick={disminuirCantidad}>-</button>
          <p className="quantity">{cantidad}</p>
          <button className="quantity-button" onClick={incrementarCantidad}>+</button>
        </div>
        <Link to="/Productos">
          <button className="back-button">Volver</button>
        </Link>
        <Link to={`/AgregarAlCarrito/${product.id}`}>
          <button className="add-to-cart-button">Agregar al carrito</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;