import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'profile-card',
  styleUrl: 'profile-card.scss',
  shadow: true,
})
export class profileCard {
  render() {
    return (
      <Host>
        <div class={`profile-card`}>
          <profile-avatar></profile-avatar>
          <profile-level></profile-level>
        </div>
      </Host>
    );
  }
}
