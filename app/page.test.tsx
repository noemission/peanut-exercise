/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Page from './page';

it('App Router: Works with Server Components', () => {
  render(<Page />);
  expect(screen.getByRole('heading')).toHaveTextContent('Welcome to the NextJS Peanut Exercise 👋🏼');
});
