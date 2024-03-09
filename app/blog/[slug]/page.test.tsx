/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import Page from './page';

it('Returns Not-Found on unknown slugs', async () => {
  try{
    await Page({
      params: {slug: 'not-found'}
    });
  }catch(err){
    expect((err as any).digest).toBe('NEXT_NOT_FOUND');
  }
});
