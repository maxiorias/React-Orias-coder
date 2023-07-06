import React from 'react';
import { ShoppingCart } from '@mui/icons-material';

const CartWidget = ({ cartItems }) => {
  return (
    <div className="cart-widget">
      <ShoppingCart className="cart-widget__icon" />
      {cartItems > 0 && <span className="cart-widget__notification">{cartItems}</span>}
    </div>
  );
};

export default CartWidget;