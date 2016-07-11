import { Injectable } from '@angular/core';
// import * as _ from 'lodash';

import 'lodash';
declare var _;

@Injectable()
export class WordsService {

  words = ['Computers', 'Numbers', 'Random', 'Cards',
  'Food', 'Laptop', 'Watermelon', 'T-Shirt', 'Green', 'Categories',
  'Table', 'Coffee', 'Star', 'Sister', 'Cry', 'Shopping', 'School',
  'Taxi', 'Tax', 'Swimming', 'Calendar', 'Hospital', 'Five', 'Ball',
  'Run', 'Cat', 'Dog', 'Fake', 'Robot', 'Black', 'Goodbye', 'Song',
  'Escape', 'Newspaper', 'Future', 'Scream', 'Music', 'Sound', 'Duck',
  'Smock', 'Money', 'Swimming Pool', 'Beer', 'Pizza', 'Vodka', 'Hamburger',
  'King', 'Poker', 'Casino', 'Soccer', 'Children', 'Guitar', 'Flight'];

  killersNames: string[];

  constructor() {
    this.killersNames = _.shuffle( this.words );
  }

  getWord(index): string {
    return this.killersNames[index];
  }
}
