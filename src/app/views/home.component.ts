import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-home',
  providers: [ ],
  directives: [ ROUTER_DIRECTIVES ],
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
export class HomeComponent {


  constructor() {


  }


}
