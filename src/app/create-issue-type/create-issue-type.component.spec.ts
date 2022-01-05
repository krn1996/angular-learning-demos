import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIssueTypeComponent } from './create-issue-type.component';

describe('CreateIssueTypeComponent', () => {
  let component: CreateIssueTypeComponent;
  let fixture: ComponentFixture<CreateIssueTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIssueTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIssueTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
