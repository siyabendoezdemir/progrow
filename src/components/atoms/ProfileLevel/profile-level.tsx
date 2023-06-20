import { Component, h, Host, Prop, State } from '@stencil/core';
import { calculateLevelProgress, getUserLevel, getUserXP } from '../../../utils/user';

@Component({
  tag: 'profile-level',
  styleUrl: 'profile-level.scss',
  shadow: true,
})
export class profileLevel {
  @Prop() username: string = 'Siya';
  @State() xp: number;
  @State() level: number;
  @State() progress: number;

  async componentWillLoad() {
    this.xp = await getUserXP(this.username);
    this.level = await getUserLevel(this.username);
    this.progress = await calculateLevelProgress(this.username, this.xp);
  }

  render() {
    return (
      <Host>
        <div class={`level-wrapper`}>
          <span class={`level-text`}>
            lvl. <span class={`level`}>{this.level}</span>
          </span>
          <div class="progress">
            <div class="bar" style={{ width: `${ this.progress }%` }}></div>
          </div>
        </div>
      </Host>
    );
  }
}
