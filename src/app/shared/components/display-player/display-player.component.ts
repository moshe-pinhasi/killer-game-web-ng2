import { Component, OnInit, Input } from '@angular/core';

import { KillerComponent } from '../killer/killer.component';

@Component({
  selector: 'display-player',
  styleUrls: ['display-player.component.scss'],
  directives: [KillerComponent],
  template: `
    <div class="displayPlayer">
      <div class="displayPlayer__row center displayPlayer__playerAnimation"
           [ngClass]="{'displayPlayer__showPlayer': !hidePlayer}"
           (click)="showMore()">
          <killer [name]="player.name" [uuid]="player.uuid"></killer>
      </div>

      <div class="displayPlayer__row center displayPlayer__playerAnimation"
           [ngClass]="{'displayPlayer__showPlayer': !hideDetails}">
        <div sytle="displayPlayer__aimPlayer">
          <div>Your person is: <span class="displayPlayer__playerWord">{{player.person.name}}</span></div>
          <div>His word is: <span class="displayPlayer__playerWord">{{player.person.word}}</span></div>
          <div class="displayPlayer__killText center">Kill him!</div>
        </div>
      </div>

    </div>

  `
})
export class DisplayPlayerComponent implements OnInit {

  @Input() player;
  @Input() showDetailsAuto;
  hidePlayer: boolean = true;
  hideDetails: boolean = true;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => this.hidePlayer = false, 500);

    if (this.showDetailsAuto) {
      setTimeout(this.showMore, 700);
    }
  }

  showMore() {
    this.hideDetails = false;
  }
}
