import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { KillersListGameComponent } from './killers-list-game.component';

describe('Component: KillersListGame', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [KillersListGameComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([KillersListGameComponent],
      (component: KillersListGameComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(KillersListGameComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(KillersListGameComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-killers-list-game></app-killers-list-game>
  `,
  directives: [KillersListGameComponent]
})
class KillersListGameComponentTestController {
}

