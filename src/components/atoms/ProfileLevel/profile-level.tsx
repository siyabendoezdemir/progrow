import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'profile-level',
  styleUrl: 'profile-level.scss',
  shadow: true,
})
export class profileLevel {

  db = window.localStorage;

  @State() xp: number = this.db.getItem('xp') == null ? 0 : Number(this.db.getItem('xp'));
  @State() level: number = this.db.getItem('level') == null ? 1 : Number(this.db.getItem('level'));
  @Prop() devmode: boolean;

  addXP(amount: number) {
    this.checkLevel(this.xp, this.xp + amount);
    this.xp += amount;
    this.db.setItem('xp', `${this.xp}`);
  }

  checkLevel(oldValue, newValue) {
    if(newValue >= oldValue && newValue >= 100){
      this.level++;
      this.xp = 0;
      this.db.setItem('level', `${this.level}`);
      this.db.setItem('xp', `${this.xp}`);
    }
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
        <button class={`devmode-btn`} style={{ display: `${this.devmode ? `block` : `none`}` }} onClick={() => this.addXP(10)}>+10 XP</button>
      </Host>
    );
  }
}
