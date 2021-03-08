import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ cartTotal }) => (
  <div className="header">
    <Link className="eshopper" to="/"><b>Eshopper</b></Link>
    <div className="all-orders-and-cart">
      <Link to="allOrders" className="all-orders">All Orders</Link>
      {/* <div className="go-to-cart"> */}
      <img className="cart" src="../assets/images/cart.jpeg" alt="cart-logo" />
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
      {/* </div> */}
    </div>
  </div>
);

Header.propTypes = {
  cartTotal: PropTypes.number.isRequired,
};
export default Header;
