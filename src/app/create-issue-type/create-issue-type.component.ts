import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { IssueTrackingService } from '../issue-tracking.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-issue-type',
  templateUrl: './create-issue-type.component.html',
  styleUrls: ['./create-issue-type.component.css'],
})
export class CreateIssueTypeComponent implements OnInit {
  departments: any[] = [
    { value: 'account', name: 'Account' },
    { value: 'finance', name: 'Finance' },
    { value: 'admin', name: 'Admin' },
  ];

  assigneRuleTypes: any[] = [
    { key: 'Specified Only', value: 'SPECIFIED' },
    { key: 'From Rule Table', value: 'FROM RULE TABLE' },
    {
      key: 'From Rule Table if Not available than Specified',
      value: 'FROM RULE TABLE IF NOT AVAILABLE THEN SPECIFIED',
    },
  ];
  followerRuleTypes: any[] = [
    { key: 'Specified Only', value: 'SPECIFIED' },
    { key: 'From Rule Table', value: 'FROM RULE TABLE' },
    {
      key: 'Specified and From Rule Table',
      value: 'BOTH FROM SPECIFIED AND RULE TABLE',
    },
    {
      key: 'From Rule Table if Not available than Specified',
      value: 'FROM RULE TABLE IF NOT AVAILABLE THEN SPECIFIED',
    },
  ];
  dueDateRuleTypes: any[] = [
    { key: 'Specified Only', value: 'SPECIFIED' },
    { key: 'From Rule Table', value: 'FROM RULE TABLE' },
    {
      key: 'From Rule Table if Not available than Specified',
      value: 'FROM RULE TABLE IF NOT AVAILABLE THEN SPECIFIED',
    },
  ];
  issueType: any = {
    issueType: null,
    isSystemIssue: false,
    isHidden: false,
    relatedTo: [],
    extensionReasons: [],
    standardResolutionTime: 10800000,
    isInternal: false,
    customFields: [],
    defaultAssignee: null,
    defaultFollowers: [],
    status: 'ACTIVE',
    escalationLevels: [],
    showIn: [],
    sharedDepartments: [],
    category: null,
    linkedIssue: [],
    assigneeRuleType: this.assigneRuleTypes[0].value,
    assigneeRuleId: null,
    followerRuleType: this.followerRuleTypes[0].value,
    followerRuleId: null,
    dueTimeRuleType: this.dueDateRuleTypes[0].value,
    dueTimeRuleId: null,
  };

  constructor(
    public dialogRef: MatDialogRef<CreateIssueTypeComponent>,
    public _IssueTrackingService : IssueTrackingService
  ) {}

  ngOnInit(): void {}

  confirm = () => this.dialogRef.close(true);

  close = () => this.dialogRef.close(false);

  selectedValue(value: any[], objectKey: string) {
    this.issueType[objectKey] = value;
  }

  createIssueType() {
    // let issueType = {
    //   issueType: 'Rohit issue',
    //   isSystemIssue: false,
    //   isHidden: false,
    //   relatedTo: ['Accounts'],
    //   extensionReasons: [],
    //   standardResolutionTime: 10800000,
    //   isInternal: false,
    //   customFields: [],
    //   defaultAssignee: null,
    //   defaultFollowers: [],
    //   status: 'ACTIVE',
    //   escalationLevels: [],
    //   showIn: ['shipment'],
    //   sharedDepartments: ['Test 2'],
    //   category: 'Ticket',
    //   linkedIssue: [],
    //   assigneeRuleType: 'SPECIFIED',
    //   assigneeRuleId: null,
    //   followerRuleType: 'SPECIFIED',
    //   followerRuleId: null,
    //   dueTimeRuleType: 'SPECIFIED',
    //   dueTimeRuleId: null,
    // };
    this._IssueTrackingService.createIssueType(this.issueType).subscribe( data => {
      console.log(data);
    });
  }
}
