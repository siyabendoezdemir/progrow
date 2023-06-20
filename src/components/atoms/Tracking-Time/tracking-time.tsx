import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'tracking-time',
  styleUrl: 'tracking-time.scss',
  shadow: true,
})
export class timeTracker {
  @Prop() username!: string;

  async getTimeSpentCoding() {
    try {
      const response = await fetch(`https://codestats.net/api/users/${this.username}`);

      if (response.ok) {
        const data = await response.json();
        // Process the data as needed
        console.log(data);
      } else {
        console.error('Failed to fetch time spent coding:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  componentDidLoad() {
    this.getTimeSpentCoding();
  }

  render() {
    return (
      <Host>
        <div>Hello, World!</div>
      </Host>
    );
  }
}
