import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-killer-form',
  styleUrls: ['add-killer-form.component.scss'],
  providers: [],
  templateUrl: `
    <div class="addKillerForm pull--right">

      <div class="addKillerForm__inputContainer">
          <input type="text"
               [(ngModel)]="name"
               class="addKillerForm__input"
               placeholder="Type a name">
        </div>

        <button type="submit"
            class="btn btn__add btn--circle addKillerForm__addBtn"
            (click)="sendForm()">
          +
        </button>
    </div>
  `
})
export class AddKillerFormComponent {

  name: string;
  @Output('addedKiller') whenKillerAdded = new EventEmitter<string>();

  constructor() {}


  sendForm() {

    const isEmpty = (value) => value === undefined || value === null || value.length === 0;

    if (isEmpty(this.name)) {
      return;
    }

    this.whenKillerAdded.emit(this.name);
    this.name = null;
  }
}
