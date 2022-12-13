import { newE2EPage } from '@stencil/core/testing';

describe('bsin-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bsin-modal></bsin-modal>');

    const element = await page.find('bsin-modal');
    expect(element).toHaveClass('hydrated');
  });
});
