import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { KillersService } from '../shared/services/killers.service';

import { KillersListComponent } from '../shared/components/killers-list/killers-list.component';

@Component({
  selector: 'my-home',
  providers: [ ],
  directives: [ KillersListComponent, ROUTER_DIRECTIVES ],
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
           [routerLink]="['/createPlayers']">
          New Game
        </a>
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {

  killers;

  constructor(private killersService: KillersService) {
    // Do stuff
    this.killers = killersService.getKillers();

  }

  ngOnInit() {
    //console.log(this.killers);
  }

  onRemove(uuid) {
    console.log("uuid: " + uuid + " removed");
  }

}
