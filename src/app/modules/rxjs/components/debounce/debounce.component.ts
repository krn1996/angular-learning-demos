import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, of, Subject } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit {

  private debouneSubject: Subject<string> = new Subject();
  private ducSubject2: Subject<string> = new Subject();

  constructor(
    private du : DesignUtilityService
  ) { }

  ngOnInit(): void {
    this.debouneSubject
    .pipe(
      debounceTime(800)
      )
    .subscribe(res=>{
      this.du.print(res,'elContainer1')
    })
    this.ducSubject2
    .pipe(
      debounceTime(800),
      distinctUntilChanged()
      )
      .subscribe
      (res=>{
      this.du.print(res,'elContainer2')
    })


  }

  calling(val){
    this.du.print(val,'elContainer')
  }

  onKeyUp(val: string){
    this.debouneSubject.next(val);
  }

  onKeyUp2(val: string){
    this.ducSubject2.next(val);
  }

}
