import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidP1sComponent } from './raid-p1s.component';

describe('RaidP1sComponent', () => {
  let component: RaidP1sComponent;
  let fixture: ComponentFixture<RaidP1sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidP1sComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidP1sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
