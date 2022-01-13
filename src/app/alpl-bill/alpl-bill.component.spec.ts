import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlplBillComponent } from './alpl-bill.component';

describe('AlplBillComponent', () => {
  let component: AlplBillComponent;
  let fixture: ComponentFixture<AlplBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlplBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlplBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
