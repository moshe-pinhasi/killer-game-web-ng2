import { Injectable } from '@angular/core';
import { WordsService } from './words.service';

import 'lodash';
declare var _;

@Injectable()
export class KillersService {

  killers: Array<any> = [];

  constructor(private wordsService: WordsService) {

  }

  getKillers (): any {
    return this.killers;
  }

  addKiller (killer): void {
    this.killers.push({
      name: killer,
      uuid: _.random(1000000).toString(),
      word: this.wordsService.getWord(this.killers.length+1)
    });
  }

  removeKiller (uuid): void {
    _.remove(this.killers, (killer) => killer.uuid === uuid);
  }

}
