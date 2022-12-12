import { newSpecPage } from '@stencil/core/testing';
import { BsinButton } from '../bsin-button';

describe('bsin-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsinButton],
      html: `<bsin-button></bsin-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bsin-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bsin-button>
    `);
  });
});
