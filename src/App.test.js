import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

let URL = 'http://localhost/';

describe('App.js', () => {
  let fromTest = '#fac';
  let toTest = '#caf';
  it('should have an add color button', () => {
    const { getByText } = render(<App />);
    const addButton = getByText(/Добавить новый/i);
    expect(addButton).toBeInTheDocument();
  });

  it('should have an add button with link to a new page', () => {
    render(<App />);
    expect(screen.getByText(/Добавьте/i)).toHaveProperty('href', URL + 'new');
  });

  it('should show addColor page', () => {
    render(<App />);
    let addButton = screen.getByText(/Добавьте/i);
    userEvent.click(addButton);
    expect(screen.getAllByRole('textbox')).toHaveLength(2);
  });

  it('should add a new color', () => {
    render(<App />);

    let [from, to] = screen.getAllByRole('textbox');
    let acceptButton = screen.getByText('Submit');
    userEvent.type(from, fromTest);
    userEvent.type(to, toTest);
    userEvent.click(acceptButton);
    expect(screen.getByText(`${fromTest} ${toTest}`)).toBeInTheDocument();
  });

  it('should show an edit window', () => {
    render(<App />);
    expect(screen.getByText(`${fromTest} ${toTest}`)).toBeInTheDocument();
    let editButton = screen.getByTestId('edit-button');
    userEvent.click(editButton);

    expect(screen.getAllByRole('textbox')).toHaveLength(2);
    let [from, to] = screen.getAllByRole('textbox');
    userEvent.clear(from);
    userEvent.type(from, '#be1cd0');
    userEvent.clear(to);
    userEvent.type(to, '#0dc1be');
    let acceptButton = screen.getByText('Submit');
    userEvent.click(acceptButton);
    expect(screen.getByText(/#be1cd0 #0dc1be/)).toBeInTheDocument();
  });

  it('should show when coppied to clipboard', () => {
    render(<App />);
    let maItem = screen.getByRole('listitem');
    userEvent.click(maItem);
    expect(screen.queryByText('Coppied!')).toBeInTheDocument();
  });

  it('should delete an item', () => {
    render(<App />);
    expect(screen.getByText(/#be1cd0 #0dc1be/)).toBeInTheDocument();
    let delButton = screen.getByTestId('delete-button');
    userEvent.click(delButton);

    expect(screen.queryByText(/#be1cd0 #0dc1be/)).not.toBeInTheDocument();
  });
});
