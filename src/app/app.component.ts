import { Component } from '@angular/core';
 import { ROUTER_DIRECTIVES } from '@angular/router';

import { KillersService } from './shared/services/killers.service';
import { WordsService } from './shared/services/words.service';

import { UserAvatarComponent } from './shared/components/user-avatar/user-avatar.component';

import '../style/app.scss';

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
    <div>Webpack Angular 2 Starter</div>

    <!--<div><user-avatar [uuid]="286628"></user-avatar></div>-->

    <div>
      <nav>
        <a [routerLink]="['']">home</a>
        <a [routerLink]="['createPlayers']">Create players</a>
        <a [routerLink]="['startGame']">start game</a>
        <a [routerLink]="['playersPresentation']">players Presentation</a>
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

    console.log(killersService.getKillers());
  }
}
