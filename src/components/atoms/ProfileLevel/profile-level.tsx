import { Component, h, Host, Prop, } from '@stencil/core';

@Component({
  tag: 'profile-level',
  styleUrl: 'profile-level.scss',
  shadow: true,
})
export class profileLevel {
  @Prop() xp: number;
  @Prop() level: number;
  @Prop() devmode: boolean;

  addXP() {
    this.xp += 10;
  }

  render() {
    console.log(this.devmode)
    return (
      <Host>
        <div class={`level-wrapper`}>
          <span class={`level-text`}>
            lvl. <span class={`level`}>{this.level}</span>
          </span>
          <div class="progress">
            <div class="bar" style={{ width: `${this.xp}%` }}></div>
          </div>
        </div>
        <button style={{ display: `${this.devmode ? `block` : `none`}` }} onClick={() => this.addXP()}>+10 XP</button>
      </Host>
    );
  }
}
