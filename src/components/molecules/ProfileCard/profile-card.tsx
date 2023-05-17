import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'profile-card',
  styleUrl: 'profile-card.scss',
  shadow: true,
})
export class profileCard {

  @Prop() devmode: boolean = false;

  render() {
    return (
      <Host>
        <div class={`profile-card`}>
          <profile-avatar></profile-avatar>
          <profile-level devmode={ this.devmode }></profile-level>
        </div>
      </Host>
    );
  }
}
