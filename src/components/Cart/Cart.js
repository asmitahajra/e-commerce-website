import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartTable from '../CartTable/CartTable';

const Cart = ({ cartItems }) => {
  const totalValue = cartItems.reduce(
    (cartTotal, currentItem) => cartTotal + currentItem.count * currentItem.price, 0,
  );
  const itemNo = cartItems.length;
  // const myJSON = JSON.stringify(cartItems);
  // console.log(JSON.stringify(cartItems));
  return (
    <div className="cart-page">
      <div className="cart-table-body">
        <h1>
          Your Basket (
          {itemNo}
          {' '}
          items)
        </h1>
        <hr />
        <div className="tableItems">
          <CartTable cartItems={cartItems} />
        </div>
      </div>
      <div className="checkout-continue-container">
        <Link to="/"><button type="button" className="continue-shopping">Continue Shopping</button></Link>
        <div className="checkout-container">
          <div className="total-value">
            <h2>
              TOTAL
              {' '}
              Rs.
              {totalValue}
            </h2>
            <hr />
          </div>
          <Link to="/checkout"><button className="checkout" type="button">checkout</button></Link>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  })).isRequired,
};

export default Cart;
