import { getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import Main from './Index';

let deleteHandler = jest.fn();
let emptyList = [];
let tempList = [
  { id: Math.random() * 100, from: '#fca', to: '#fac' },
  { id: Math.random() * 100, from: '#000', to: '#fff' },
];

describe('Main.js', () => {
  it('should not have any lists', () => {
    render(
      <BrowserRouter>
        <Main colorList={emptyList} deleteHandler={deleteHandler} />
      </BrowserRouter>,
    );
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
  it('should 2 list items', () => {
    render(
      <BrowserRouter>
        <Main colorList={tempList} deleteHandler={deleteHandler} />
      </BrowserRouter>,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
  xit('should delete an item', () => {
    render(
      <BrowserRouter>
        <Main colorList={tempList} deleteHandler={deleteHandler} />
      </BrowserRouter>,
    );
    // let listItem = screen.getByRole('list').firstChild;

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    let delButton = screen.getAllByTestId('delete-button')[0];
    userEvent.click(delButton);
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });
});
