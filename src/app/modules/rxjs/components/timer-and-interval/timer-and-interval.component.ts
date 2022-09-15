import { Component, OnInit } from '@angular/core';
import { interval, Subscription, take, timer } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-timer-and-interval',
  templateUrl: './timer-and-interval.component.html',
  styleUrls: ['./timer-and-interval.component.css']
})
export class TimerAndIntervalComponent implements OnInit {

  subs1: Subscription
  subs2: Subscription
  timerStart: boolean;
  timerSub: Subscription;
  race1sub: Subscription;
  race2sub: Subscription;
  obj ;
  data: any;
  constructor(
    private du: DesignUtilityService
  ) {
  }

  ngOnInit(): void {
    let data1 = new Promise((resolve,reject)=>{
       setTimeout(() => {
        this.du.getData1().subscribe(res=>{
          resolve(res)
        })
       }, 5000);
    })

    let data2 = new Promise((resolve,reject)=>{
      setTimeout(() => {
        this.du.getData2().subscribe(res=>{
       resolve(res)
     })
      }, 3000);
   })
    Promise.all([data1,data2]).then(res=>{
      console.log(res)
    })
    const intervalStream = interval(1000)
    const timerStream = timer(5000,1000)
    const race1 = interval(1000)
    const race2 = interval(1000)
    this.subs1 = intervalStream.subscribe(res=>{
      this.du.print(res,'elContainer')
      if(res >= 5){
        this.subs1.unsubscribe()
      }
    })
    this.timerSub = timerStream.subscribe(res=>{
      this.du.print(res,'elContainer3')
      if(res >= 5){
        this.timerSub.unsubscribe()
      }
    })
  }




  startTimer(){
    const intervalStream = interval(1000)
    this.du.clearList('elContainer2')
    this.subs2 = intervalStream.subscribe(res=>{
        this.timerStart = true
        this.du.print(res,'elContainer2')
    })
  }

  stopTimer(){

      this.subs2.unsubscribe()
      this.timerStart = false

  }

}
