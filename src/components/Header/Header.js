import React, { useContext } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';

const Header = ({ cartTotal }) => {
  const Theme = useContext(ThemeContext);
  const currentTextColor = Theme.color;
  return (
    <div className={currentTextColor === 'white' ? 'header-dark' : 'header-light'}>
      <Link className="eshopper" to="/"><b>E-Shopper</b></Link>
      <div className="all-orders-and-cart">
        <Link to="allOrders" className="all-orders">All Orders</Link>
        {/* <div className="go-to-cart"> */}
        <img data-testid="cart-img" className="cart" src="../assets/images/cart.jpeg" alt="cart-logo" />
        <div className="items-in-basket">
          <Link to="/cart">
            <div>
              My Basket
              <div>
                {cartTotal}
                {' '}
                items
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  cartTotal: PropTypes.number.isRequired,
};
export default Header;
