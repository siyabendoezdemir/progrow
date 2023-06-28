import { Component, h, Prop, State } from '@stencil/core';
import firebase from 'firebase/compat';
import { firebaseConfig } from '../../../utils/firebase.config';
import { getNewUserXP, getUsername, giveCoins } from '../../../utils/user';

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

    /* RESET XP COLLECTED STATUS IF NEW DAY */
    const lastResetDate = localStorage.getItem('lastResetDate');
    if (lastResetDate !== today) {
      localStorage.setItem('lastResetDate', today);
      localStorage.setItem('xp500Collected', 'false');
      localStorage.setItem('xp2500Collected', 'false');
      this.xp500Collected = false;
      this.xp2500Collected = false;
    }
  }

  componentDidLoad() {
    firebase.initializeApp(firebaseConfig);
  }

  claimReward(type: string) {
    if (type === 'login') {
      localStorage.setItem('lastLoginDate', new Date().toLocaleDateString());
      this.loggedInClaimable = false;
      giveCoins(JSON.parse(localStorage.getItem('user')).id, 1);
    } else if (type === 'xp500') {
      this.xp500Collected = true;
      localStorage.setItem('xp500Collected', 'true');
      giveCoins(JSON.parse(localStorage.getItem('user')).id, 3);
    } else {
      this.xp2500Collected = true;
      localStorage.setItem('xp2500Collected', 'true');
      giveCoins(JSON.parse(localStorage.getItem('user')).id, 5);
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
