import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'killers-board',
  styleUrls: ['killers-board.component.scss'],
  template: `
    <div class="killersBoard">
      <div class="killersBoard__headerContainer"><ng-content select="board-header"></ng-content></div>
      <div class="killersBoard__gameContainer"><ng-content select="board-body"></ng-content></div>
      <div class="killersBoard__actionsContainer"><ng-content select="board-actions"></ng-content></div>
    </div>
  `
})
export class KillersBoardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
