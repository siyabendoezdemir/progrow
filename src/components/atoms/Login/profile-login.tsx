import { Component, h, Host, State } from '@stencil/core';
import { firebaseConfig } from '../../../utils/firebase.config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { loginUser } from '../../../utils/user';

@Component({
  tag: 'profile-login',
  styleUrl: 'profile-login.scss',
  shadow: true,
})
export class Login {
  @State() username: string = '';
  @State() token: string = '';

  componentDidLoad() {
    firebase.initializeApp(firebaseConfig);
  }

  checkCredentials() {
    if(this.username != null && this.token != null) {
      loginUser(this.username, this.token);
    }
  }

  render() {
    return (
      <Host>
        <div class={`form`}>
          <div class="username">
            <label htmlFor="username">
              <a href="https://codestats.net/my/profile" target="_blank">
                CodeStats
              </a>{' '}
              Username
            </label>
            <input type="text" id="username" value={this.username} onInput={event => (this.username = (event.target as HTMLInputElement).value)} />
          </div>
          <div class="password">
            <label htmlFor="token">
              <a href="https://codestats.net/my/machines" target="_blank">
                CodeStats API Key
              </a>
            </label>
            <input type="text" id="token" value={this.token} onInput={event => (this.token = (event.target as HTMLInputElement).value)} />
          </div>

          <button class={`submit`} onClick={() => this.checkCredentials()}>
            Login
          </button>
        </div>
      </Host>
    );
  }
}
