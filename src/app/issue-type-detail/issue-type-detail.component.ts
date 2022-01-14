import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IssueTrackingService } from '../issue-tracking.service';

@Component({
  selector: 'app-issue-type-detail',
  templateUrl: './issue-type-detail.component.html',
  styleUrls: ['./issue-type-detail.component.css']
})
export class IssueTypeDetailComponent implements OnInit {


  issueTypeCustomField: any[] = [];

  constructor(public dialogRef: MatDialogRef<IssueTypeDetailComponent>,
     
    private dialog: MatDialog,   public _IssueTrackingService :IssueTrackingService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      issueTypeData: any;
      issueTypeCustomField: any;
     },) { }


  ngOnInit(): void {
    console.log(this.data);
    
    this.issueTypeCustomField = this.data.issueTypeCustomField;

  }

  confirm = () => this.dialogRef.close(true);

  close = () => this.dialogRef.close(false);

}
