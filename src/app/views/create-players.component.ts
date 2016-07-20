import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { KillersService } from '../shared/services/killers.service';

import { KillersBoardComponent } from '../shared/components/killers-board/killers-board.component';
import { KillersListComponent } from '../shared/components/killers-list/killers-list.component';
import { AddKillerFormComponent } from '../shared/components/add-killer-form/add-killer-form.component';

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
             ng-class="{'btn--disabled': killers.length < 3}"
             [routerLink]="['/playersPresentation']">
            Start
          </a>
        </board-actions>
      </killers-board>
    </div>
  `
})
export class CreatePlayersComponent {

  killers;

  constructor(private killersService: KillersService) {
    this.killers = killersService.getKillers();
  }

  onKillerAdded(killerName) {
    this.killersService.addKiller(killerName);
  }

  onRemove(uuid) {
    this.killersService.removeKiller(uuid);
  }
}
