import { Component, h, Host, State } from '@stencil/core';
import firebase from 'firebase/compat';
import { firebaseConfig } from '../../../utils/firebase.config';

@Component({
  tag: 'code-battles',
  styleUrl: 'code-battles.scss',
  shadow: true,
})
export class Leaderboard {
  @State() challenge: string = '';

  async componentWillLoad() {
    firebase.initializeApp(firebaseConfig);
  }

  generateChallenge() {
    // Generate a random coding challenge
  }

  render() {
    return (
      <Host>
        <div class={'overlay'}>
          <div class={'challenge'}>
            <h2 class={'title'}>Coding Exercises</h2>
            <button onClick={() => this.generateChallenge()}>Generate Challenge</button>
            <div>{this.challenge}</div>
            {/* Add code editor component here */}
            {/* Add check button component here */}
          </div>
        </div>
      </Host>
    );
  }
}
