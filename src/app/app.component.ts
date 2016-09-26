import { Component, Inject } from '@angular/core';
import { KillersService, WordsService, StoreService } from 'src/app/services';

import { RESTORE_KILLERS } from 'src/app/reducers/killersReducer';

const localStorage = require('store');

import '../style/general.scss';
import '../style/globals.scss';
import '../style/btns.scss';

/*
 * App Component
 * Top Level Component
 */

@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [WordsService, KillersService, StoreService],
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

  constructor(@Inject('AppStore') private store, private storeService: StoreService) {
    const localKillers = localStorage.get('killers');

    if (!localKillers) {
      return;
    }

    this.store.dispatch({ type: RESTORE_KILLERS, killers: localKillers.killers });
  }
}
