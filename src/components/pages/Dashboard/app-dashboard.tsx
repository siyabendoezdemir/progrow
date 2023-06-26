import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-dashboard',
  styleUrl: 'app-dashboard.scss',
  shadow: true,
})
export class Dashboard {
  render() {
    return (
      <Host>
        <div class={'profile-information'}>
          <profile-card class={'profile'}></profile-card>
          <user-challenges class={'challenges'}></user-challenges>
        </div>
      </Host>
    );
  }
}
