import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidP4sP1Component } from './raid-p4s-p1.component';

describe('RaidP4sP1Component', () => {
  let component: RaidP4sP1Component;
  let fixture: ComponentFixture<RaidP4sP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidP4sP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidP4sP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
