import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing, appRoutingProviders }  from 'src/app/app.routes';

import { AppComponent }   from './app/app.component';
import { HomeComponent } from './app/views/home.component';
import { CreatePlayersComponent } from './app/views/create-players.component';
import { StartGameComponent } from './app/views/start-game.component';
import { PlayersPresentationComponent } from './app/views/players-presentation.component';

import {createStore} from 'redux';
import { killersReducer } from 'src/app/reducers/killersReducer';
const appStore = createStore(killersReducer);

import {
  AddKillerFormComponent ,
  DisplayPlayerComponent,
  KillerComponent,
  KillersBoardComponent,
  KillersListComponent,
  KillersListGameComponent,
  UserAvatarComponent
} from 'src/app/components';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,

    /* views components*/
    HomeComponent,
    CreatePlayersComponent,
    StartGameComponent,
    PlayersPresentationComponent,

    /* general components */
    AddKillerFormComponent ,
    DisplayPlayerComponent,
    KillerComponent,
    KillersBoardComponent,
    KillersListComponent,
    KillersListGameComponent,
    UserAvatarComponent
  ],
  providers: [
    appRoutingProviders,
    { provide: 'AppStore', useValue: appStore}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // this line need for the ng-content
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
