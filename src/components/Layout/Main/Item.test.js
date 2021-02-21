import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Item from './Item';

let from = '#fcc';
let to = '#acf';
let id = Math.floor() * 100;
let deleteHandler = jest.fn();
let onClickItem = jest.fn();

describe('Item', () => {
  it('should render an element with proper color', () => {
    render(
      <BrowserRouter>
        <Item from to deleteHandler id onClickItem />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('color')).toHaveStyle(
      `background: linear-gradient(to right, ${from},${to})`,
    );
  });
});
