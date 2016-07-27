import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { REMOVE_ALL_KILLERS } from 'src/app/reducers/killersReducer';

const localStorage = require('store');

@Component({
  selector: 'my-home',
  providers: [ ],
  directives: [ ],
  styles: [`
    .homepage {
        height: 100%;
        background: url('img/killer2.png') no-repeat;
        background-size: 100% 100%;
    }
  `],
  template: `
    <div class="homepage center">
      <div class="homepage__startContainer">
        <a class="btn btn__start btn--ellipse"
           (click)="startNewGame()">
          New Game
        </a>
      </div>
    </div>
  `
})
export class HomeComponent {


  constructor(@Inject('AppStore') private store, private router: Router) {

  }

  startNewGame () {
    localStorage.clear();
    this.store.dispatch({ type: REMOVE_ALL_KILLERS });

    this.router.navigate(['/createPlayers']);
  }
}
