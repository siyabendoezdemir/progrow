import { Component, h, Host, State } from '@stencil/core';
import firebase from 'firebase/compat';
import { firebaseConfig } from '../../../utils/firebase.config';
import { getUsersRanked } from '../../../utils/user';

@Component({
  tag: 'user-leaderboard',
  styleUrl: 'user-leaderboard.scss',
  shadow: true,
})
export class Leaderboard {
  @State() topUsers = [];

  async componentWillLoad() {
    firebase.initializeApp(firebaseConfig);
    this.topUsers = await getUsersRanked();
    console.log(this.topUsers)
  }
  render() {
    return (
      <Host>
        <div class={'overlay'}>
          <div class={'leaderboard'}>
            <ul class={'users'}>
              {this.topUsers.map((user, index) => (
                <div class={'user'}>
                  <span class={'placement'}>{index + 1}.</span>
                  <div class={'profile'}>
                    <profile-avatar name={user.username} size="small"></profile-avatar>
                    <span class={'username'}>{user.username}</span>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}
