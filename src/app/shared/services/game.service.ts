import { Injectable } from '@angular/core';

const _ = require('lodash');

@Injectable()
export class GameService {

  constructor() {}

  match (killers): string[] {

    let k = _.shuffle(killers);

    k[k.length-1].person = k[0];
    let i;
    for (i = 0; i < k.length-1; i++) {
      k[i].person = k[i+1];
    }

    return _.shuffle(k);
  }
}
