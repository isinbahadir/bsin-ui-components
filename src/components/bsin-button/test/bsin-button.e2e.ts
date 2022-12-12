import { newE2EPage } from '@stencil/core/testing';

describe('bsin-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bsin-button></bsin-button>');

    const element = await page.find('bsin-button');
    expect(element).toHaveClass('hydrated');
  });
});
