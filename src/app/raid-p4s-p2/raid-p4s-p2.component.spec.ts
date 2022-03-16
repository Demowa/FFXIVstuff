import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidP4sP2Component } from './raid-p4s-p2.component';

describe('RaidP4sP2Component', () => {
  let component: RaidP4sP2Component;
  let fixture: ComponentFixture<RaidP4sP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidP4sP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidP4sP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
