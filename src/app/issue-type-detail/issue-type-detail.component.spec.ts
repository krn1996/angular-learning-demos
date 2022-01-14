import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTypeDetailComponent } from './issue-type-detail.component';

describe('IssueTypeDetailComponent', () => {
  let component: IssueTypeDetailComponent;
  let fixture: ComponentFixture<IssueTypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueTypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
