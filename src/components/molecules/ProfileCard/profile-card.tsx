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
        <img src='https://user-images.githubusercontent.com/15401997/119324530-823a6e00-bcb2-11eb-85df-26d9dd0f1359.png' alt="" />
        <div class={`profile-card`}>
          <profile-avatar></profile-avatar>
          <profile-level></profile-level>
        </div>
      </Host>
    );
  }
}
