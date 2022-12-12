import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'bsin-button',
  styleUrl: 'bsin-button.css',
  shadow: true,
})
export class BsinButton {
  @Prop() look: string;
  @Prop() primary: boolean;

  render() {
    return (
      <Host>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
