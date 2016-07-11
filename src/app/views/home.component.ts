import { Component, OnInit } from '@angular/core';

import { KillersService } from '../shared/services/killers.service';

import { KillersListComponent } from '../shared/components/killers-list/killers-list.component';

@Component({
  selector: 'my-home',
  providers: [ ],
  directives: [ KillersListComponent ],
  template: `
    home page

    <!--<app-killers-list [killers]="killers"-->
						  <!--(deleted)="onRemove($event)"></app-killers-list>-->
  `
})
export class HomeComponent implements OnInit {

  killers;

  constructor(private killersService: KillersService) {
    // Do stuff
    this.killers = killersService.getKillers();

  }

  ngOnInit() {
    //console.log(this.killers);
  }

  onRemove(uuid) {
    console.log("uuid: " + uuid + " removed");
  }

}
