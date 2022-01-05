import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class IssueTrackingService {

  constructor(public _sharedService: SharedService) { }

    // create issue
    public createIssueType(reqObj: any) {
      let path = 'https://apis.fretron.com/issue/v1/issue-type';
      return this._sharedService.callService("post", reqObj, path);
    }
}
