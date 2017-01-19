/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FontComponent } from './font.component';

describe('FontComponent', () => {
  let component: FontComponent;
  let fixture: ComponentFixture<FontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
