/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe(Header.name, () => {
  const mockProp = {
    cartTotal: 0,
  };
  afterEach(() => jest.clearAllMocks());

  test('should match snapshot', () => {
    const { container } = render(<BrowserRouter><Header {...mockProp} /></BrowserRouter>);
    expect(container).toMatchSnapshot();
  });

  test('should open Homepage when E-Shopper link clicked', () => {
    render(<BrowserRouter><Header {...mockProp} /></BrowserRouter>);
    const eshopperLink = screen.getByText('E-Shopper');
    fireEvent.click(eshopperLink);
    expect(document.location.href).toBe('http://localhost/');
  });

  test('should open All Orders page when link clicked', () => {
    render(<BrowserRouter><Header {...mockProp} /></BrowserRouter>);
    const allOrdersLink = screen.getByText('All Orders');
    fireEvent.click(allOrdersLink);
    expect(document.location.href).toBe('http://localhost/allOrders');
  });

  test('should display product image', () => {
    render(<BrowserRouter><Header {...mockProp} /></BrowserRouter>);
    screen.getByTestId('cart-img');
  });

  test('should open Cart page on clicking My Basket and items', () => {
    render(<BrowserRouter><Header {...mockProp} /></BrowserRouter>);
    screen.getByText('My Basket');
    screen.getByText('0 items');
    const cartLink = screen.getByText('My Basket');
    fireEvent.click(cartLink);
    expect(document.location.href).toBe('http://localhost/cart');
    const itemsLink = screen.getByText('0 items');
    fireEvent.click(itemsLink);
    expect(document.location.href).toBe('http://localhost/cart');
  });

//   it('Should take to Home page on click', () => {
//     render(
//       <BrowserRouter>
//         <Header {...mockProp} />
//       </BrowserRouter>,
//     );
//     const logoLink = screen.getByTestId('img-tag');
//     fireEvent.click(logoLink);
//     expect(document.location.href).toBe('http://localhost/');
//   });
});
