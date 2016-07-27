import { Injectable, Inject, OnDestroy } from '@angular/core';

import { RESTORE_KILLERS } from 'src/app/reducers/killersReducer';

const localStorage = require('store');

@Injectable()
export class StoreService implements OnDestroy {

  unsubscribe;
  constructor(@Inject('AppStore') private store) {
    this.unsubscribe = this.store.subscribe(() => {
      const state = this.store.getState();
      if (state.action === RESTORE_KILLERS) {
        return;
      }

      localStorage.set('killers', this.store.getState());
    });

  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
