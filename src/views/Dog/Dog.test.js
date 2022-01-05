import { render, screen } from '@testing-library/react';
import Dog from './Dog';
import { MemoryRouter, Route } from 'react-router-dom';

test('renders individual dog', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/10']}>
      <Route path="/dogs/:id" component={Dog} />
    </MemoryRouter>
  );
  await screen.findByText('Name: Barton');

  expect(container).toMatchSnapshot();
});
