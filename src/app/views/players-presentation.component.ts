import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { KillersBoardComponent, DisplayPlayerComponent } from 'src/app/components';

import { GameService } from 'src/app/services';

import { SET_KILLERS } from 'src/app/reducers/killersReducer';

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

  constructor(@Inject('AppStore') private store, private gameService: GameService, private router: Router) {

    if (store.getState().killers.length === 0) {
      router.navigate(['/']);
    }

  }

  ngOnInit() {
    this.killers = this.gameService.match(this.store.getState().killers);
    this.store.dispatch({ type: SET_KILLERS, killers: this.killers });

    this.index = 0;
    this.player = this.killers[0];
    this.finished = false;
  }

  next() {

    if (this.finished) {
      this.router.navigate(['startGame']);
    }

    if (this.index === (this.killers.length - 1)) {
      return;
    }

    this.player = this.killers[++this.index];
    (this.index === (this.killers.length - 1)) && (this.finished = true);
  }

  back() {
    if (this.index === 0) {
      return;
    }
    this.finished = false;
    this.player = this.killers[--this.index];
  }
}
