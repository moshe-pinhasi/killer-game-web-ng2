import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './views/home.component';
import { CreatePlayersComponent } from './views/create-players.component';
import { StartGameComponent } from './views/start-game.component';
import { PlayersPresentationComponent } from './views/players-presentation.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'createPlayers', component: CreatePlayersComponent},
  { path: 'startGame', component: StartGameComponent},
  { path: 'playersPresentation', component: PlayersPresentationComponent}
];



export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
