import React from 'react';
import PropTypes from 'prop-types';
import './CartTable.css';

const CartTable = ({ cartItems }) => (
  <div>
    <div className="cart-table-container">
      <table className="cart-table">
        <thead className="table-header">
          <tr className="">
            <th>ITEM DESCRIPTION</th>
            <th>UNIT PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="category-header" colSpan="4">Fruits and Vegetables</td></tr>
          {cartItems.map((cartItem) => (
            <tr key={cartItem.id}>
              <td>
                {cartItem.company}
                <br />
                {cartItem.name}
              </td>
              <td>{cartItem.price}</td>
              <td>{cartItem.count}</td>
              <td>{cartItem.count * cartItem.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

CartTable.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  })).isRequired,
};

export default CartTable;
