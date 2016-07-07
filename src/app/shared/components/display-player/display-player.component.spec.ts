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
import { DisplayPlayerComponent } from './display-player.component';

describe('Component: DisplayPlayer', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [DisplayPlayerComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([DisplayPlayerComponent],
      (component: DisplayPlayerComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DisplayPlayerComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(DisplayPlayerComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-display-player></app-display-player>
  `,
  directives: [DisplayPlayerComponent]
})
class DisplayPlayerComponentTestController {
}

