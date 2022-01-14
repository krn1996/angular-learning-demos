import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIssueTypeComponent } from './update-issue-type.component';

describe('UpdateIssueTypeComponent', () => {
  let component: UpdateIssueTypeComponent;
  let fixture: ComponentFixture<UpdateIssueTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIssueTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIssueTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
