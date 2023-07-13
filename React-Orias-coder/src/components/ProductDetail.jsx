import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './products.json';
import './ProductDetail.css';

const ProductDetail = ({ handleAddToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [talla, setTalla] = useState('');

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  const incrementarCantidad = () => {
    setCantidad((prevCantidad) => prevCantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad((prevCantidad) => prevCantidad - 1);
    }
  };

  const addToCart = () => {
    const selectedProduct = {
      ...product,
      talla: talla,
      cantidad: cantidad
    };

    handleAddToCart(selectedProduct);

    console.log('Producto agregado al carrito:');
    console.log('Nombre:', selectedProduct.name);
    console.log('Cantidad:', selectedProduct.cantidad);
    console.log('Talla:', selectedProduct.talla);
    console.log('Precio Total:', selectedProduct.price * selectedProduct.cantidad);
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  const precioTotal = product.price * cantidad;

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
        {(product.category === 'camisas' || product.category === 'remeras') && (
          <div className="talla-container">
            <p>Talla:</p>
            <div>
              <button
                className={`talla-button ${talla === 'S' && 'active'}`}
                onClick={() => setTalla('S')}
              >
                S
              </button>
              <button
                className={`talla-button ${talla === 'M' && 'active'}`}
                onClick={() => setTalla('M')}
              >
                M
              </button>
              <button
                className={`talla-button ${talla === 'L' && 'active'}`}
                onClick={() => setTalla('L')}
              >
                L
              </button>
              <button
                className={`talla-button ${talla === 'XL' && 'active'}`}
                onClick={() => setTalla('XL')}
              >
                XL
              </button>
            </div>
          </div>
        )}
        <div className="quantity-container">
          <button className="quantity-button" onClick={disminuirCantidad}>
            -
          </button>
          <p className="quantity">{cantidad}</p>
          <button className="quantity-button" onClick={incrementarCantidad}>
            +
          </button>
        </div>
        <p className="precio-total">Precio Total: ${precioTotal}</p>
        <Link to="/Productos">
          <button className="back-button">Volver</button>
        </Link>
        <button className="add-to-cart-button" onClick={addToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;