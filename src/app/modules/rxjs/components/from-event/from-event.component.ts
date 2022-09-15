import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  @ViewChild('addbtn') addbtn: ElementRef

  constructor(private du : DesignUtilityService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    let counter = 1;
    fromEvent(this.addbtn.nativeElement,'click').subscribe(res=>{
      let countVal = 'Stream ' + counter++
      console.log('Stream ' + counter)
      this.du.print(countVal,'elContainer')
    }
    )
  }



}
