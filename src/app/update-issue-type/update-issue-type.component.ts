import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IssueTrackingService } from '../issue-tracking.service';

@Component({
  selector: 'app-update-issue-type',
  templateUrl: './update-issue-type.component.html',
  styleUrls: ['./update-issue-type.component.css']
})
export class UpdateIssueTypeComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  issueTypeData: any;
  dataSource: any;
  issueTypeCustomField: any[] = [];
  customFieldDetail: any[] = [];
  customFields: any[] = [];

  constructor(public dialogRef: MatDialogRef<UpdateIssueTypeComponent>,
     
    private dialog: MatDialog,   public _IssueTrackingService :IssueTrackingService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      issueTypeData: any;
     },) { }

  ngOnInit(): void {
    this.issueTypeData = this.data.issueTypeData.data;
    this.fetchCustomFields();
  }

 

  confirm = () => this.dialogRef.close(true);

  close = () => this.dialogRef.close(false);

  fetchCustomFields() {
    this._IssueTrackingService
      .fetchCustomFields()
      .subscribe((data) => {
        this.issueTypeCustomField = data.data;
      });
  }

  selectCf(customField: any, index: number) {
    this.dataSource = [customField.cfs];    
    customField.restriction.restrictions = [
      {
        configuration: {},
        permissions: {
          roleIds: [],
          userIds: [],
        },
        objectIdentifier: this.issueTypeData.issueType,
        mandates: "optional",
        conditions: null,
        objectUuid: this.issueTypeData.issueType.uuid,
        objectType: "ISSUE.TYPE",
        sequenceNumber: this.customFields.length,
      },
    ];
    this.customFields = [...this.customFields, customField];
    this.customFieldDetail = [];
  }

  saveAllCustomFields() {
    this.customFieldDetail = [];

    for (let customfield of this.customFields) {
      let reqObj = {
        cfsId: customfield.uuid,
        restriction: customfield.restriction.restrictions[0],
      };
      this.customFieldDetail.push(reqObj);
    }

    this._IssueTrackingService
      .saveAllCustomFields(this.customFieldDetail)
      .subscribe(
        (res: any) => {
          if (res.status === 200) {
            this._IssueTrackingService.issueTypeCustomField.next(res.data[0].cfs);
             this.close();
          }
        },
      );
  }

}
