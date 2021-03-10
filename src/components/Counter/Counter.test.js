/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
// import { Theme, ThemeContext } from '../../ThemeContext';

describe(Counter.name, () => {
  const mockProp = {
    count: 0,
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('sanity', () => {
    expect(1 + 1).toBe(2);
  });

  test('should match snapshot', () => {
    const { container } = render(<Counter {...mockProp} />);
    expect(container).toMatchSnapshot();
  });

  test('should display an increment button', () => {
    render(<Counter {...mockProp} />);
    const incrementElement = screen.getByText('+');
    expect(incrementElement.tagName).toBe('BUTTON');
  });

  test('should display an increment button', () => {
    render(<Counter {...mockProp} />);
    const decrementElement = screen.getByText('-');
    expect(decrementElement.tagName).toBe('BUTTON');
  });

  test('should display the current count', () => {
    render(<Counter {...mockProp} />);
    expect(screen.getByText('0 in Basket'));
  });

  test('should fire onIncrement function on clicking +', () => {
    render(<Counter {...mockProp} />);
    const incrementCount = screen.getByText('+');
    fireEvent.click(incrementCount);
    expect(mockProp.onIncrement).toHaveBeenCalledTimes(1);
  });

  test('should fire onDecrement function on clicking -', () => {
    render(<Counter {...mockProp} />);
    const decrementCount = screen.getByText('-');
    fireEvent.click(decrementCount);
    expect(mockProp.onDecrement).toHaveBeenCalledTimes(1);
    // expect(mockProp.onDecrement).not.toHaveBeenCalled();
  });
});
