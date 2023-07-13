import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CartWidget = ({ cartItems }) => {
  return (
    <div className="cart-widget">
      <Link to="/carrito">
        <ShoppingCart className="cart-widget__icon" />
        {cartItems > 0 && <span className="cart-widget__notification">{cartItems}</span>}
      </Link>
    </div>
  );
};

export default CartWidget;