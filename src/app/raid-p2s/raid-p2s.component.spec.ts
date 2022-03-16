import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidP2sComponent } from './raid-p2s.component';

describe('RaidP2sComponent', () => {
  let component: RaidP2sComponent;
  let fixture: ComponentFixture<RaidP2sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidP2sComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidP2sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
