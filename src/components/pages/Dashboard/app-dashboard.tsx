import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-dashboard',
  styleUrl: 'app-dashboard.scss',
  shadow: true,
})
export class Dashboard {
  render() {
    return (
      <Host class={'host'}>
        <div class={'profile-information'}>
          <profile-card class={'profile'} />
          <user-challenges class={'challenges'} />
        </div>
      </Host>
    );
  }
}
