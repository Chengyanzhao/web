/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WebAppComponent } from './web-app.component';

describe('WebAppComponent', () => {
  let component: WebAppComponent;
  let fixture: ComponentFixture<WebAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
