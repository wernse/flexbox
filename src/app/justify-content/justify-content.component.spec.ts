/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JustifyContentComponent } from './justify-content.component';

describe('JustifyContentComponent', () => {
  let component: JustifyContentComponent;
  let fixture: ComponentFixture<JustifyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustifyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustifyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
