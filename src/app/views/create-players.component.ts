import { Component, Inject, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { KillersService } from '../shared/services/killers.service';

import { KillersBoardComponent, KillersListComponent, AddKillerFormComponent } from '../shared/components/components';

import { ADD_KILLER, REMOVE_KILLER } from '../shared/reducers/killersReducer';

@Component({
  selector: 'create-players',
  providers: [],
  directives: [ KillersBoardComponent, KillersListComponent, AddKillerFormComponent, ROUTER_DIRECTIVES ],
  template: `
    <div class="createPlayers center">
      <killers-board>
        <board-header>
          {{killers.length}} Killers <span class="createPlayers__minKillers">(min killers 3)</span>
        </board-header>

        <board-body>
          <killers-list [killers]="killers"
                (deleted)="onRemove($event)"></killers-list>
          <div class="createPlayers__addPlayerContainer">
            <add-killer-form (addedKiller)="onKillerAdded($event)"></add-killer-form>
          </div>
        </board-body>

        <board-actions>
          <a class="btn btn__start btn--ellipse"
             [ngClass]="{'btn--disabled': killers.length < 3}"
             [routerLink]="['/playersPresentation']">
            Start
          </a>
        </board-actions>
      </killers-board>
    </div>
  `
})
export class CreatePlayersComponent implements OnDestroy {

  killers;
  unsubscribe;

  constructor(@Inject('AppStore') private store, private killersService: KillersService) {
    this.unsubscribe = this.store.subscribe(() => this.setKillers());
    this.setKillers();
  }

  setKillers() {
    this.killers = this.store.getState().killers;
  }

  onKillerAdded(killerName) {
    const k = this.killersService.getKillerObj(killerName);
    this.store.dispatch({ type: ADD_KILLER, killer: k });
  }

  onRemove(uuid) {
    this.store.dispatch({ type: REMOVE_KILLER, uuid: uuid });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
