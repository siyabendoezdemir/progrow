import { Component, h, Host, State } from '@stencil/core';
import { getUserStatus } from '../../../utils/user';

@Component({
  tag: 'profile-card',
  styleUrl: 'profile-card.scss',
  shadow: true,
})
export class profileCard {
  @State() loggedIn = getUserStatus() ? true : false;

  render() {
    return (
      <Host>
        {this.loggedIn ? (
          <div class={`profile-card`}>
            <profile-avatar></profile-avatar>
            <profile-level></profile-level>
          </div>
        ) : (
          <div class={`profile-card`}>
            <profile-login></profile-login>
          </div>
        )}
      </Host>
    );
  }
}
