import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  obsmsg;
  sub1: Subscription;
  subobjs: Subscription;
  users = [{name:'Karan',age: 25},{name:'Abc',age: 28},{name:'Def',age: 27}]
  data: { name: string; age: number; }[];
  constructor(
    private du: DesignUtilityService
  ) { }

  ngOnInit(): void {
    let source = interval(1000)
    let sub2 = from(this.users)
    this.sub1 = source.pipe(
      take(5),  //to complete the stream of interval
      toArray()     // to make indivdual stream into array
    ).subscribe(res=>{
      console.log(res)
      this.du.print(res,'elContainer')
      this.sub1.unsubscribe()
    })

    this.subobjs = sub2.pipe(
      toArray()     // to make indivdual stream into array
    ).subscribe(res=>{
      console.log(res)
      this.data = res
    })
  }

}
