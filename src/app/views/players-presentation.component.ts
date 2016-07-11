import { Component, OnInit } from '@angular/core';

import { KillersBoardComponent } from '../shared/components/killers-board/killers-board.component';
import { DisplayPlayerComponent } from '../shared/components/display-player/display-player.component';

import { KillersService } from '../shared/services/killers.service';
import { GameService } from '../shared/services/game.service';

@Component({
  selector: 'players Presentation',
  providers: [GameService],
  directives: [KillersBoardComponent, DisplayPlayerComponent],
  template: `
    <div class="playersPresentation center">
      <killers-board>
        <board-header>
          {{killers.length}} Killers
        </board-header>

        <board-body>
          <display-player [player]="player" [showDetailsAuto]="false"></display-player>
        </board-body>

        <board-actions>
          <a class="btn btn__start btn--ellipse"
             (click)="back()">
            Back
          </a>
          <a class="btn btn__start btn--ellipse"
             (click)="next()">
            {{finished ? 'Done' : 'Next'}}
          </a>
        </board-actions>
      </killers-board>
    </div>

  `
})
export class PlayersPresentationComponent implements OnInit {

  killers;
  player: any;
  finished: boolean;
  index: number;

  constructor(private killersService: KillersService, private gameService: GameService) {

  }

  ngOnInit() {
    this.killers = this.gameService.match(this.killersService.getKillers());
    this.index = 0;
    this.player = this.killers[0];
    this.finished = false;
  }

  next() {

  }

  back() {

  }
}
