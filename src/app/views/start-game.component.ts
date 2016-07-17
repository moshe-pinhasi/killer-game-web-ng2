import { Component, OnInit } from '@angular/core';

import { KillersService } from '../shared/services/killers.service';

import { KillersBoardComponent } from '../shared/components/killers-board/killers-board.component';
import { DisplayPlayerComponent } from '../shared/components/display-player/display-player.component';
import { KillersListGameComponent } from '../shared/components/killers-list-game/killers-list-game.component';
//import { KillersListComponent } from '../shared/components/killers-list/killers-list.component';

const _ = require('lodash');

@Component({
  selector: 'start-game',
  providers: [],
  directives: [KillersBoardComponent, DisplayPlayerComponent, KillersListGameComponent],
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

        </killers-board>
      </div>
  `
})
export class StartGameComponent implements OnInit {

  killers;
  killer;
  winner;

  constructor(private killersService: KillersService) {

  }

  ngOnInit() {
    this.killers = _.shuffle(this.killersService.getKillers());
  }

  onRemove = (uuid) => { // uuid - the died player

    const getKiller = (uuid) => this.killers.filter(player => player.person.uuid === uuid)[0];
    const getDiedPlayer = (uuid) => this.killers.filter (player => player.uuid === uuid)[0];

    this.killer = getKiller(uuid); // player here hit the killer
    const diedPlayer = getDiedPlayer(uuid);

    this.killer.person = diedPlayer.person; // replace the win player aim with the died player aim
    this.killers.length > 2 && setTimeout(() => {
      this.killers = _.remove(this.killers, (player) => player.uuid !== uuid); // removing the died player from list
      this.killer = null;
    }, 5000);

    if (this.killers.length === 2) {
      this.killers = _.remove(this.killers, (player) => player.uuid !== uuid); // removing the died player from list
      this.winner = this.killers[0].name;
    }
  }
}
