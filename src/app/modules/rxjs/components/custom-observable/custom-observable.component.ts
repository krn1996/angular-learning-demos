import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {

  status1st;
  status2nd;
  constructor(private du :DesignUtilityService) { }

  ngOnInit(): void {
    const cusObs1 =  new Observable((obs:Observer<any>)=>{
      setTimeout(()=>{
        obs.next('Angular')
      },1000)
      setTimeout(()=>{
        obs.next('Node')
      },2000)
      setTimeout(()=>{
        obs.next('JavaScript')
        obs.complete()
        this.status1st = 'complete'
      },3000)
    })

    const cusObs2 =  new Observable((obs:Observer<any>)=>{
      setTimeout(()=>{
        obs.next('1st Person')
      },1000)
      setTimeout(()=>{
        obs.next('2nd Person')
      },2000)
      setTimeout(()=>{
        obs.next('3rd Person')
        obs.error('Exceed Limit')
        this.status2nd = 'error'
      },3000)
      setTimeout(()=>{
        obs.next('4rd Person')
      },3000)
    })

    cusObs1.subscribe((res)=>{
      this.du.print(res,'elContainer')
    })
    cusObs2.subscribe(res=>{
      this.du.print(res,'elContainer2')
    })
  }

}
