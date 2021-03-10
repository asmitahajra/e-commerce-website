/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';

describe(Cart.name, () => {
  const mockProp = {
    cartItems: [{
      id: 1,
      name: 'apple',
      price: 20,
      count: 1,
      image: 'apple.jpg',
      company: 'FRSHO',
    }, {
      id: 2,
      name: 'banana',
      price: 30,
      count: 1,
      image: 'banana.jpg',
      company: 'FRSHO',
    }],
  };

  afterEach(() => jest.clearAllMocks());

  test('should match snapshot', () => {
    const { container } = render(<BrowserRouter><Cart {...mockProp} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });

  test('should display Your Basket and no. of items', () => {
    render(<BrowserRouter><Cart {...mockProp} /></BrowserRouter>);
    screen.getByText('Your Basket (2 items)');
  });

  test('should render CartTable', () => {
    render(<BrowserRouter><Cart {...mockProp} /></BrowserRouter>);
    screen.getByTestId('cart-table');
  });

  test('should open Homepage when continue shopping clicked', () => {
    render(<BrowserRouter><Cart {...mockProp} /></BrowserRouter>);
    const continueShoppingButton = screen.getByText('Continue Shopping');
    fireEvent.click(continueShoppingButton);
    expect(document.location.href).toBe('http://localhost/');
  });

  test('should display total amount', () => {
    render(<BrowserRouter><Cart {...mockProp} /></BrowserRouter>);
    screen.getByText('TOTAL Rs.50');
  });

  test('should open checkout form when checkout clicked', () => {
    render(<BrowserRouter><Cart {...mockProp} /></BrowserRouter>);
    const checkoutButton = screen.getByText('checkout');
    fireEvent.click(checkoutButton);
    expect(document.location.href).toBe('http://localhost/checkout');
  });
});
