import React, { useState } from 'react';
import { ShoppingCart } from '@mui/icons-material';

const CartWidget = () => {
  const [cartItems, setCartItems] = useState(0); 

  return (
    <div className="cart-widget">
      <ShoppingCart className="cart-widget__icon" />
      <span className="cart-widget__notification">{cartItems}</span> 
    </div>
  );
};

export default CartWidget;