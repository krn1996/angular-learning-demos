import { Component, OnInit } from '@angular/core';
import { concat, from, interval, map, take, concatAll,concatMap, of, delay, mergeMap, switchMap } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-diff-maps',
  templateUrl: './diff-maps.component.html',
  styleUrls: ['./diff-maps.component.css']
})
export class DiffMapsComponent implements OnInit {

  constructor(private du:DesignUtilityService) { }


  ngOnInit(): void {
    const person = from(['Karan Mishra','Harry Potter','Tom Holland'])
    person
    .pipe(
      concatMap(x => this.getData(x)),

      )
    .subscribe(res=>{
      this.du.print(res ,'elContainer2')
    })

    person
    .pipe(
      switchMap(x => this.getData(x)),

      )
    .subscribe(res=>{
      this.du.print(res ,'elContainer4')
    })

    person
    .pipe(
      mergeMap(x => this.getData(x)),

      )
    .subscribe(res=>{
      this.du.print(res ,'elContainer3')
    })

  }
  getData(val){
    return of(val + ' in Marvel Universe.').pipe(delay(1000));
  }
}
