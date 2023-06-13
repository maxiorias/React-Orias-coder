import React, { useState } from 'react';
import { ShoppingCart } from '@mui/icons-material';

const CartWidget = () => {
  const [cartItems, setCartItems] = useState(0); // Estado para almacenar el número de elementos en el carrito

  return (
    <div className="cart-widget">
      <ShoppingCart className="cart-widget__icon" />
      <span className="cart-widget__notification">{cartItems}</span> {/* Mostrar el número de elementos en el carrito */}
    </div>
  );
};

export default CartWidget;