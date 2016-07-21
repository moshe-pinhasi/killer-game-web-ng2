import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { KillerComponent } from 'src/app/components';

@Component({
  selector: 'killers-list-game',
  styleUrls: ['killers-list-game.component.scss'],
  directives: [KillerComponent],
  template: `
    <div class="killersListGame">
      <ul class="killersListGame__container">
        <li class="killersListGame__item" *ngFor="let killer of killers">
          <button type="button"
              class="btn btn--circle killersListGame__btnRemove"
              (click)="onRemove(killer.uuid)">
          </button>
          <killer [name]="killer.name" [uuid]="killer.uuid"></killer>
        </li>
      </ul>
    </div>
  `

})
export class KillersListGameComponent implements OnInit {

  @Input() killers;
  @Output('deleted') whenKillerDeleted = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {

  }

  onRemove(uuid) {
    this.whenKillerDeleted.emit(uuid);
  }
}
