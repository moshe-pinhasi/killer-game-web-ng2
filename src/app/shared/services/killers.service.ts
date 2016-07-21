import { Injectable, Inject, OnDestroy } from '@angular/core';
import { WordsService } from './words.service';

const _ = require('lodash');

@Injectable()
export class KillersService implements OnDestroy {

  index: number = 0;
  unsubscribe;
  constructor(@Inject('AppStore') private store, private wordsService: WordsService) {
    this.unsubscribe = this.store.subscribe(() => this.index = this.store.getState().killers.length);
  }

  getKillerObj (killer) {
    return {
      name: killer,
      uuid: _.random( 1000000 ).toString(),
      word: this.wordsService.getWord( this.index )
    };
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
