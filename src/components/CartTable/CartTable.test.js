/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartTable from './CartTable';

describe(CartTable.name, () => {
  const mockProp = {
    cartItems: [{
      id: 1,
      name: 'apple',
      price: 20,
      count: 2,
      image: 'apple.jpg',
      company: 'FRSHO',
    }, {
      id: 2,
      name: 'banana',
      price: 30,
      count: 2,
      image: 'banana.jpg',
      company: 'FRSHO',
    }],
  };

  // afterEach(() => jest.clearAllMocks());

  test('should match snapshot', () => {
    const { container } = render(<CartTable {...mockProp} />);
    expect(container).toMatchSnapshot();
  });

  test('should display cart items table headers', () => {
    // const { queryByTestId } = render(<BrowserRouter><CartTable {...mockProp} /></BrowserRouter>);
    // expect(queryByTestId('cart-table')).toBeTruthy();
    render(<CartTable {...mockProp} />);
    screen.getByText('ITEM DESCRIPTION');
    screen.getByText('UNIT PRICE');
    screen.getByText('QUANTITY');
    screen.getByText('SUBTOTAL');
    screen.getByText('Fruits and Vegetables');

    // screen.getByText('apple');
    // screen.getByText('banana');
  });

  test('should display cart items', () => {
    // const { queryByTestId } = render(<BrowserRouter><CartTable {...mockProp} /></BrowserRouter>);
    // expect(queryByTestId('cart-table')).toBeTruthy();
    render(<CartTable {...mockProp} />);
    // screen.getByText("FRSHO'\n'apple");
    screen.getByText('apple');
    screen.getByText('banana');
    screen.getByText('20');
    screen.getByText('30');
  });

  //   test('should display the items in the cart', () => {
  //     expect(1 + 1).toBe(2);
  //     // render(<BrowserRouter><Cart {...mockProp} /></BrowserRouter>);
  //     // screen.getByText('Your Basket (2 items)');
  //   });

  //   test('should open Homepage when continue shopping clicked', () => {
  //     render(<BrowserRouter><Cart {...mockProp} /></BrowserRouter>);
  //     const continueShoppingButton = screen.getByText('Continue Shopping');
  //     fireEvent.click(continueShoppingButton);
  //     expect(document.location.href).toBe('http://localhost/');
  //   });

  //   test('should display total amount', () => {
  //     render(<BrowserRouter><Cart {...mockProp} /></BrowserRouter>);
  //     screen.getByText('TOTAL Rs.50');
  //   });

//   test('should open checkout form when checkout clicked', () => {
//     render(<BrowserRouter><Cart {...mockProp} /></BrowserRouter>);
//     const checkoutButton = screen.getByText('checkout');
//     fireEvent.click(checkoutButton);
//     expect(document.location.href).toBe('http://localhost/checkout');
//   });
});
