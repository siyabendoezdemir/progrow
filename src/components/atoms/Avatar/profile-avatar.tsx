import { Component, h, Host, Prop } from '@stencil/core';
import { getUsername } from '../../../utils/user';

@Component({
  tag: 'profile-avatar',
  styleUrl: 'profile-avatar.scss',
})
export class Avatar {

  @Prop() size = 'medium';
  @Prop() name = getUsername();

  render() {
    return (
      <Host >
        <img class={`avatar ${this.size}`} src={`https://robohash.org/${this.name}.png`}></img>
      </Host>
    );
  }
}
