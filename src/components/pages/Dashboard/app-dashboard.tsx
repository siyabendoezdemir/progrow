import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-dashboard',
  styleUrl: 'app-dashboard.scss',
  shadow: true,
})
export class Dashboard {
  render() {
    return (
      <div class={'dashboard-container'}>
        <div class={'profile-information'}>
          <profile-card class={'profile'} />
          <user-challenges class={'challenges'} />
        </div>
        <div class={'right'}>
          <user-leaderboard class={'leaderboard'} />
        </div>
      </div>
    );
  }
}
