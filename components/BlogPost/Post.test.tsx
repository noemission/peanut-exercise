/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Post from './Post';

jest.mock('../../lib/blog/suggested', () => {
  return jest.fn().mockResolvedValue({
    pages: []
  });
});

// Workaround for using browser APIs in jest
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});


it('Renders a Post', async () => {
  render( await Post({
    post: {
      header: {
        title: 'title',
        description: 'description'
      },
      author: {
        name: 'test',
        avatar_url: 'test_img'
      },
      body: 'Super cool text',
      published_at: new Date(new Date().getTime() - 60 * 60 * 24 * 1000 * 3).toISOString()      ,
      related_articles: []
    } as any,
    slug: 'test'
  }));
  
  expect(screen.getByTestId('reading-time').textContent).toBe(', 1 min reading');
  expect(screen.getByTestId('relative-date').textContent).toBe('3 days ago');
  expect(screen.getByText('Super cool text'));
});
