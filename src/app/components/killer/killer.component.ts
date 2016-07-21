import { Component, OnInit, Input } from '@angular/core';

import { UserAvatarComponent } from 'src/app/components';

@Component({
  selector: 'killer',
  styleUrls: ['killer.component.scss'],
  directives: [UserAvatarComponent],
  template: `
    <div class="killer">
      <div class="killer__avatar"><user-avatar [uuid]="uuid"></user-avatar></div>
      <div class="killer__name">{{name}}</div>
    </div>
  `
})
export class KillerComponent implements OnInit {

  @Input() name;
  @Input() uuid;

  constructor() {}

  ngOnInit() {
  }

}
