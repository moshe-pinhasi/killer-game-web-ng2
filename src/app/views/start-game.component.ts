import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { KillersBoardComponent, DisplayPlayerComponent, KillersListGameComponent } from 'src/app/components';

import { REMOVE_ALL_KILLERS, SET_KILLERS } from 'src/app/reducers/killersReducer';

const localStorage = require('store');

const _ = require('lodash');

@Component({
  selector: 'start-game',
  providers: [],
  template: `

      <div class="startGame center">
        <killers-board>
          <board-header>
            {{killers.length}} Killers In Game
          </board-header>

          <board-body>
            <display-player
                    *ngIf="killer && !winner"
                    [player]="killer"
                    [showDetailsAuto]="true"></display-player>
            <killers-list-game
                       *ngIf="!killer && !winner"
                       [killers]="killers"
                       (deleted)="onRemove($event)"></killers-list-game>
            <div *ngIf="winner">{{winner}} is the killer!</div>
          </board-body>

          <board-actions>
          <a *ngIf="winner"
             class="btn btn__start btn--ellipse"
             (click)="startNewGame()">
            Start
          </a>
        </board-actions>
        </killers-board>
      </div>
  `
})
export class StartGameComponent implements OnInit {

  killers;
  killer;
  winner;

  constructor(@Inject('AppStore') private store, private router: Router) {
    if (store.getState().killers.length === 0) {
      router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.killers = _.shuffle(this.store.getState().killers);

    if (this.killers.length === 1) {
      this.winner = this.killers[0].name;
    }
  }

  startNewGame () {
    localStorage.clear();
    this.store.dispatch({ type: REMOVE_ALL_KILLERS });

    this.router.navigate(['/createPlayers']);
  }

  onRemove = (killerId) => { // uuid - the died player

    const getKiller = (uuid) => this.killers.filter(player => player.person.uuid === uuid)[0];
    const getDiedPlayer = (uuid) => this.killers.filter (player => player.uuid === uuid)[0];

    this.killer = getKiller(killerId); // player here hit the killer
    const diedPlayer = getDiedPlayer(killerId);

    this.killer.person = diedPlayer.person; // replace the win player aim with the died player aim
    if (this.killers.length === 2) {
      this.killers = _.remove(this.killers, (player) => player.uuid !== killerId); // removing the died player from list
      this.winner = this.killers[0].name;
      this.store.dispatch({ type: SET_KILLERS, killers: this.killers });
      return;
    }

    setTimeout(() => {
      this.killers = _.remove(this.killers, (player) => player.uuid !== killerId); // removing the died player from list
      this.killer = null;
      this.store.dispatch({ type: SET_KILLERS, killers: this.killers });
    }, 5000);

  }
}
