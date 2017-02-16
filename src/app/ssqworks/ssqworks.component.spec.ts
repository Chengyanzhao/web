/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SsqworksComponent } from './ssqworks.component';

describe('SsqworksComponent', () => {
  let component: SsqworksComponent;
  let fixture: ComponentFixture<SsqworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsqworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsqworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
