import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { KillersService, WordsService } from 'src/app/services';

import '../style/general.scss';
import '../style/globals.scss';
import '../style/btns.scss';

/*
 * App Component
 * Top Level Component
 */

//
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [WordsService, KillersService],
  directives: [ROUTER_DIRECTIVES],
  template: `
    <router-outlet></router-outlet>

    <!--<div class="">-->
      <!--<nav>-->
        <!--<a [routerLink]="['']">Home | </a>-->
        <!--<a [routerLink]="['createPlayers']">Create players | </a>-->
        <!--<a [routerLink]="['playersPresentation']">Players presentation | </a>-->
        <!--<a [routerLink]="['startGame']">Start game</a>-->
      <!--</nav>-->
    <!--</div>-->
    <!--<div class="">-->
      <!--<router-outlet></router-outlet>-->
    <!--</div>-->
  `
})
export class AppComponent {

  constructor() {

  }
}
