import { newSpecPage } from '@stencil/core/testing';
import { BsinModal } from '../bsin-modal';

describe('bsin-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsinModal],
      html: `<bsin-modal></bsin-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <bsin-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bsin-modal>
    `);
  });
});
