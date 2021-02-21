import { render, screen } from '@testing-library/react';
import PopUp from './PopUp';

test('should have a', () => {
  render(<PopUp />);
  screen.getByText(/Coppied/i);
});
