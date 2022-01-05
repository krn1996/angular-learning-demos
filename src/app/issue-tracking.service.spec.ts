import { TestBed } from '@angular/core/testing';

import { IssueTrackingService } from './issue-tracking.service';

describe('IssueTrackingService', () => {
  let service: IssueTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
