import React from 'react';
import { ShoppingCart } from '@mui/icons-material';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <ShoppingCart className="cart-widget__icon" />
      <span className="cart-widget__notification">10</span>
    </div>
  );
};

export default CartWidget;