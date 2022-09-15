import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffMapsComponent } from './diff-maps.component';

describe('DiffMapsComponent', () => {
  let component: DiffMapsComponent;
  let fixture: ComponentFixture<DiffMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
