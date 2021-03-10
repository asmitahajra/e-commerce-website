/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Order.scss';
import PropTypes from 'prop-types';
import CartTable from '../CartTable/CartTable';

const Order = ({ cartItems }) => {
  const totalValue = cartItems.reduce(
    (cartTotal, currentItem) => cartTotal + currentItem.count * currentItem.price, 0,
  );
  return (
    <div className="order-page">
      <h1>All Orders</h1>
      <br />
      <h2>Past Orders (10)</h2>
      <div className="order-table-container">
        <div>
          <table className="order-table">
            <thead className="order-table-header">
              <tr>
                <th>Order</th>
                <th>Items</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody />
            <tr>
              <td>Order id: 12</td>
              <td>18 items</td>
              <td>Sun 04 March 2018 10:01 PM</td>
              <td>883.00</td>
            </tr>
          </table>
        </div>
        <div className="cart-table">
          <CartTable cartItems={cartItems} />
          <p id="total">
            Total
            {' '}
            {totalValue}
          </p>
        </div>
      </div>
    </div>
  );
};

Order.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  })).isRequired,
};

export default Order;
