import { render } from '@testing-library/react';
import Dogs from './Dogs';

test('renders dog page with all the dogs listed', () => {
  const container = render(<Dogs />);
  expect(container).toMatchSnapshot();
});
