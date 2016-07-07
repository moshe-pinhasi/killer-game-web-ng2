import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { KillersService } from './killers.service.ts';

describe('Killers Service', () => {
  beforeEachProviders(() => [KillersService]);

  it('should ...',
      inject([KillersService], (service: KillersService) => {
    expect(service).toBeTruthy();
  }));
});
