import { Injectable } from '@angular/core';

const _ = require('lodash');

@Injectable()
export class GameService {

  constructor() {}

  match (killers): string[] {

    let k = _.shuffle(killers);

    k[k.length - 1].person = _.pick(k[0], ['name', 'word', 'uuid']);
    let i;
    for (i = 0; i < k.length - 1; i++) {
      k[i].person = _.pick(k[i + 1], ['name', 'word', 'uuid']);
    }

    return _.shuffle(k);
  }
}
