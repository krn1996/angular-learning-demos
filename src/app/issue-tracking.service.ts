import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class IssueTrackingService {

  issueTypeData = new Subject<any>();
  issueTypeCustomField = new Subject<any>();

  constructor(public _sharedService: SharedService) { }

    // create issue
    public createIssueType(reqObj: any) {
      let path = 'https://apis.fretron.com/issue/v1/issue-type';
      return this._sharedService.callService("post", reqObj, path);
    }

    public fetchCustomFields() {
      let path = 'https://apis.fretron.com/issue/v1/issue/customFields?search=&offset=0';
      return this._sharedService.callService("get", '', path);
    }

    public saveAllCustomFields(restrictions: any) {
      let path = 'https://apis.fretron.com/issue/v1/issue/restrictions';
      return this._sharedService.callService("post", restrictions, path);
    }
}
