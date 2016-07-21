import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-avatar',
  styles: [`
    :host {
      display: block;
    }

    .userAvatar__circle {
      width: 70px;
      height: 70px;
      border-radius: 35px;
    }
  `],
  templateUrl: `
    <img src="{{avatarUrl}}" alt="{{uuid}}" class="userAvatar__circle" >
  `
})
export class UserAvatarComponent implements OnInit {

  @Input() uuid: string;
  avatarUrl: string;

  constructor() {
  }

  ngOnInit() {
    this.avatarUrl = '//robohash.org/' + this.uuid + '?set=set2&bgset=bg2&size=70x70';
  }

}
