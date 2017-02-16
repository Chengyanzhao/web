/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlatComponent } from './flat.component';

describe('FlatComponent', () => {
  let component: FlatComponent;
  let fixture: ComponentFixture<FlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
