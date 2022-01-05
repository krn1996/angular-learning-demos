import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateIssueTypeComponent } from '../create-issue-type/create-issue-type.component';

@Component({
  selector: 'app-issue-tracking',
  templateUrl: './issue-tracking.component.html',
  styleUrls: ['./issue-tracking.component.css']
})
export class IssueTrackingComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.openCreateIssueType();
  }

  openCreateIssueType() {
    const dialogRef = this.dialog.open(CreateIssueTypeComponent,{
      height: '356',
      width: '480px',      
    });
  }
}
