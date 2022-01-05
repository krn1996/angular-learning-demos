import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateIssueTypeComponent } from '../create-issue-type/create-issue-type.component';
import { IssueTrackingService } from '../issue-tracking.service';


@Component({
  selector: 'app-issue-tracking',
  templateUrl: './issue-tracking.component.html',
  styleUrls: ['./issue-tracking.component.css']
})
export class IssueTrackingComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  issueTypeData: any;
  dataSource: any;
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
   }
  

  openCreateIssueType() {
    const dialogRef = this.dialog.open(CreateIssueTypeComponent,{
      height: '356',
      width: '480px',      
    });
    
  }
}
