import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'bsin-modal',
  styleUrl: 'bsin-modal.css',
  shadow: true,
})
export class BsinModal {
  @Element() el: HTMLElement;
  @Prop() title: string;
  @Prop({
    mutable: true,
    reflect: true
  }) open: boolean;

  close() {
    this.open = false;
  }

  render() {
    if (!this.open) {
      return '';
    }
    const title = this.title ? this.title : 'Bilgi mesajı';
    return (
      <Host>
        <div class="backdrop" onClick={this.close.bind(this)}></div>
        <div class="modal">
          <div class="title">{title}</div>
          <div class="content">
            <slot> this is a modal. (web component)</slot>
          </div>
          <div class="actions">
            <button onClick={this.close.bind(this)}>Kapat</button>
          </div>
        </div>
      </Host>
    );
  }

}
