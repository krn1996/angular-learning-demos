import { Component, OnInit } from '@angular/core';
import {CompactType, DisplayGrid, Draggable, GridsterConfig, GridsterItem, GridsterItemComponentInterface, GridType, PushDirections, Resizable} from 'angular-gridster2';
interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections: PushDirections;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  options: Safe;
   dashboard: Array<GridsterItem>;
   

   static itemChange(item, itemComponent) {
     console.info('itemChanged', item, itemComponent);
   }
 
   static itemResize(item, itemComponent) {
     console.info('itemResized', item, itemComponent);
   }
   static eventStop(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent): void {
    console.info('eventStop', item, itemComponent, event);
  }

  static eventStart(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent): void {
    console.info('eventStart', item, itemComponent, event);
  }
   ngOnInit(){
    this.options = this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 5,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      minCols: 8,
      maxCols: 8,
      minRows: 4,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        delayStart: 0,
        enabled: true,
        start: AppComponent.eventStart,
        stop: AppComponent.eventStop,
        handles: {
          s: true,
          e: true,
          n: true,
          w: true,
          se: true,
          ne: true,
          sw: true,
          nw: true
        }
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: true, east: true, south: true, west: true},
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };;

    this.dashboard = [
      {cols: 4, rows: 2, y: 1, x: 2,minItemRows: 2, minItemCols: 2,lable:'1'},
      {cols: 4, rows: 2, y: 0, x: 0, minItemRows: 2, minItemCols: 2,maxItemRows: 4, maxItemCols: 4,lable:'2'},
      {cols: 2, rows: 2, y: 0, x: 0,minItemRows: 2, minItemCols: 2,dragEnabled: false, resizeEnabled: false,lable:'3'},
      {cols: 2, rows: 2, y: 0, x: 0,minItemRows: 2, minItemCols: 2,maxItemRows: 4, maxItemCols: 4,dragEnabled: true, resizeEnabled: true,lable:'4'}
    ];
   }
   changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push( {cols: 2, rows: 2, y: 0, x: 2});
  }
}
