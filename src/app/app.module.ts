import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { IssueTrackingComponent } from './issue-tracking/issue-tracking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateIssueTypeComponent } from './create-issue-type/create-issue-type.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { AlplBillComponent } from './alpl-bill/alpl-bill.component';
import { UpdateIssueTypeComponent } from './update-issue-type/update-issue-type.component';
import {MatMenuModule} from '@angular/material/menu';
import { IssueTypeDetailComponent } from './issue-type-detail/issue-type-detail.component';

 
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    IssueTrackingComponent,
    CreateIssueTypeComponent,
    AlplBillComponent,
    UpdateIssueTypeComponent,
    IssueTypeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
     BrowserAnimationsModule,
     HttpClientModule,
     MatTableModule,
     MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
