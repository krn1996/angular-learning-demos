import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridsterModule } from 'angular-gridster2';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { WidgetViewerComponent } from './components/widget-viewer/widget-viewer.component';
import { WidgetItemComponent } from './components/widget-item/widget-item.component';
import { ChartsModule } from "ng2-charts";
import { MatCardModule } from "@angular/material/card";
@NgModule({
  declarations: [
    AppComponent,
    WidgetViewerComponent,
    WidgetItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GridsterModule,
    MatButtonModule,
    MatIconModule,
    ChartsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
