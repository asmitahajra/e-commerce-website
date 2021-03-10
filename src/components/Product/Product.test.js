/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from './Product';
// import { Theme, ThemeContext } from '../../ThemeContext';

describe(Product.name, () => {
  const mockProduct = {
    product: {
      id: 1,
      name: 'apple',
      price: 20,
      count: 1,
      image: 'apple.jpg',
      company: 'FRSHO',
    },
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };
  test('sanity', () => {
    expect(1 + 1).toBe(2);
  });

  test('should match snapshot', () => {
    const { container } = render(<Product {...mockProduct} />);
    expect(container).toMatchSnapshot();
  });

  test('should display company name', () => {
    render(<Product {...mockProduct} />);
    screen.getByText('FRSHO');
  });

  test('should display product name', () => {
    render(<Product {...mockProduct} />);
    screen.getByText('apple');
  });

  test('should display product quantity', () => {
    render(<Product {...mockProduct} />);
    screen.getByText('1 kg');
  });

  test('should display product price', () => {
    render(<Product {...mockProduct} />);
    screen.getByText('MRP 20/-');
  });

  test('should display product image', () => {
    render(<Product {...mockProduct} />);
    screen.getByTestId('card-img');
  });

  test('should render Counter', () => {
    render(<Product {...mockProduct} />);
    screen.getByTestId('counter');
  });
});
