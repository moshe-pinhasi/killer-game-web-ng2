import { Injectable } from '@angular/core';
import { WordsService } from './words.service';

const _ = require('lodash');

@Injectable()
export class KillersService {

  killers: Array<any> = [];

  constructor(private wordsService: WordsService) {

  }

  getKillers (): any {
    return this.killers;
  }

  addKiller (killer): void {
    this.killers.push( {
      name: killer,
      uuid: _.random( 1000000 ).toString(),
      word: this.wordsService.getWord( this.killers.length + 1 )
    } );
  }

  setKillers (killers): void {
    this.killers = killers;
  }

  removeKiller (uuid): void {
    _.remove(this.killers, (killer) => killer.uuid === uuid);
  }

}
