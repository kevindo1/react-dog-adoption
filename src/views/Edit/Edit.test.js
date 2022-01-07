import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Edit from './Edit';

test.skip('renders Edit individual dog page', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/12/edit']}>
      <Route path="/dogs/12/edit" component={Edit} />
    </MemoryRouter>
  );
  await screen.findByText('Name: ');

  expect(container).toMatchSnapshot();
});
