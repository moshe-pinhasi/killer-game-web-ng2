import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { WordsService } from './words.service';

describe('WordsService Service', () => {
  beforeEachProviders(() => [WordsService]);

  it('should ...',
      inject([WordsService], (service: WordsService) => {
    expect(service).toBeTruthy();
  }));
});
