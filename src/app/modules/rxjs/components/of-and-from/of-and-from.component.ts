import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-of-and-from',
  templateUrl: './of-and-from.component.html',
  styleUrls: ['./of-and-from.component.css']
})
export class OfAndFromComponent implements OnInit {
  obsmsg;obsmsg2: { a: string; b: string; c: string; d: string; };
;
  constructor(
    private du:DesignUtilityService
  ) { }

  ngOnInit(): void {
    let obs1 =of('Karan','Rahul','Kartik','Shoiab')
    obs1.subscribe(res=>{
      this.du.print(res,'elContainer')
    })
    let obs2 =of({a:'Karan',b:'Rahul',c:'Kartik',d:'Shoiab'})
    obs2.subscribe(res=>{
      this.obsmsg = res
    })
    let obs3 =from([1,2,3,4,5])

    obs3.subscribe(res=>{
      this.du.print(res,'elContainer3')
    })
  }

}
