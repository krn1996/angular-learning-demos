import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerAndIntervalComponent } from './timer-and-interval.component';

describe('TimerAndIntervalComponent', () => {
  let component: TimerAndIntervalComponent;
  let fixture: ComponentFixture<TimerAndIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerAndIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerAndIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
