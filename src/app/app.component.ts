import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { KillersService } from './shared/services/killers.service';
import { WordsService } from './shared/services/words.service';

import { UserAvatarComponent } from './shared/components/user-avatar/user-avatar.component';

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
  directives: [UserAvatarComponent, ROUTER_DIRECTIVES],
  template: `
    <div>
      <nav>
        <a [routerLink]="['']">Home | </a>
        <a [routerLink]="['createPlayers']">Create players | </a>
        <a [routerLink]="['playersPresentation']">Players presentation | </a>
        <a [routerLink]="['startGame']">Start game</a>
      </nav>
    </div>
    <div>
       <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

  constructor(private killersService: KillersService) {

    killersService.addKiller('moshe');
    killersService.addKiller('yaniv');
    killersService.addKiller('igal');
    killersService.addKiller('yaron');
  }
}
