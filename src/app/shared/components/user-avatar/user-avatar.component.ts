import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-avatar',
  styleUrls: ['./user-avatar.component.scss'],
  templateUrl: `
    <img src="{{avatarUrl}}" alt="{{uuid}}" class="userAvatar__circle" >
  `
})
export class UserAvatarComponent implements OnInit {

  avatarUrl: string;
  uuid: string;

  constructor() {
    this.uuid = "286628";
    this.avatarUrl = '//robohash.org/' + this.uuid + '?set=set2&bgset=bg2&size=70x70';
  }

  ngOnInit() {
  }

}
