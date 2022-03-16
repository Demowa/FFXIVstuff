import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidP3sComponent } from './raid-p3s.component';

describe('RaidP3sComponent', () => {
  let component: RaidP3sComponent;
  let fixture: ComponentFixture<RaidP3sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidP3sComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidP3sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
