import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateIssueTypeComponent } from '../create-issue-type/create-issue-type.component';
import { IssueTrackingService } from '../issue-tracking.service';
import { IssueTypeDetailComponent } from '../issue-type-detail/issue-type-detail.component';


@Component({
  selector: 'app-issue-tracking',
  templateUrl: './issue-tracking.component.html',
  styleUrls: ['./issue-tracking.component.css']
})
export class IssueTrackingComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  issueTypeData: any;
  dataSource: any;
  issueTypeCustomField: any;
  constructor(private dialog: MatDialog, public _IssueTrackingService :IssueTrackingService) { }

  ngOnInit(): void { 
   
  }

  ngDoCheck(): void {
     this._IssueTrackingService.issueTypeData.subscribe(data => {
      if(data) {
        this.issueTypeData = data;                
        this.dataSource = [this.issueTypeData];
      }
     });

     this._IssueTrackingService.issueTypeCustomField.subscribe(data => {
      if(data) {
        this.issueTypeCustomField = data;  
       }
     });
   }
 

  openCreateIssueType() {
    const dialogRef = this.dialog.open(CreateIssueTypeComponent,{
      height: '356',
      width: '480px',      
    });
  }

  openIssueTypeDetail() {
    const dialogRef = this.dialog.open(IssueTypeDetailComponent,{
      data: {
        issueTypeData: this.issueTypeData,
        issueTypeCustomField: this.issueTypeCustomField
       },
      height: '356',
      width: '580px',      
    });
  }
}
