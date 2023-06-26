import { Component, h, Prop, State } from '@stencil/core';
import { getNewUserXP, getUsername } from '../../../utils/user';

@Component({
  tag: 'user-challenges',
  styleUrl: 'challenges.scss',
  shadow: true,
})
export class Challenges {
  @State() loggedInClaimable: boolean = false;
  @State() xpCollectedToday: number = 0;

  @Prop() xp500Collected: boolean = localStorage.getItem('xp500Collected') === 'true' ? true : false;
  @Prop() xp2500Collected: boolean = localStorage.getItem('xp2500Collected') === 'true' ? true : false;

  async componentWillLoad() {
    /* GET NEW USER XP */
    const username = await getUsername();
    this.xpCollectedToday = await getNewUserXP(username);

    /* CHECK LAST LOGIN DATE */
    const lastLoginDate = localStorage.getItem('lastLoginDate');
    const today = new Date().toLocaleDateString();

    if (lastLoginDate === today) {
      this.loggedInClaimable = false;
    } else {
      this.loggedInClaimable = true;
      localStorage.setItem('lastLoginDate', today);
    }

    /* GET REWARD COLLECT STATUS */
    if (localStorage.getItem('xp500Collected') === null) {
      localStorage.setItem('xp500Collected', 'false');
    } else if (localStorage.getItem('xp2500Collected') === null) {
      localStorage.setItem('xp2500Collected', 'false');
    }
  }

  claimReward(type: string) {
    if (type === 'login') {
      localStorage.setItem('lastLoginDate', new Date().toLocaleDateString());
      this.loggedInClaimable = false;
      //GIVE COINS TO USER
    } else if (type === 'xp500') {
      this.xp500Collected = true;
      localStorage.setItem('xp500Collected', 'true');
      //GIVE COINS TO USER
    } else {
      this.xp2500Collected = true;
      localStorage.setItem('xp2500Collected', 'true');
      //GIVE COINS TO USER
    }
  }

  render() {
    return (
      <div class={'challenges'}>
        <div class={"draggable"}></div>
        <ul class={'taskList'}>
          <li class={`task ${!this.loggedInClaimable ? 'line-through' : ''}`}>
            Login Daily{' '}
            {this.loggedInClaimable ? (
              <button class={'claim'} id={'claimLogin'} onClick={() => this.claimReward('login')}>
                Claim
              </button>
            ) : null}
          </li>
          <li class={`task ${this.xp500Collected ? 'line-through' : ''}`}>
            Gain 500 XP today{' '}
            {this.xpCollectedToday >= 500 && !this.xp500Collected ? (
              <button class={'claim'} id={'claim500'} onClick={() => this.claimReward('xp500')}>
                Claim
              </button>
            ) : null}
          </li>
          <li class={`task ${this.xp2500Collected ? 'line-through' : ''}`}>
            Gain 2'500 XP today{' '}
            {this.xpCollectedToday >= 2500 && !this.xp2500Collected ? (
              <button class={'claim'} id={'claim2500'} onClick={() => this.claimReward('xp2500')}>
                Claim
              </button>
            ) : null}
          </li>
        </ul>
      </div>
    );
  }
}
