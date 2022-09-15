import { Component, OnInit } from '@angular/core';
import { concat, concatAll, concatMap, delay, from, interval, map, merge, mergeMap, of, take } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor(private du:DesignUtilityService) { }


  ngOnInit(): void {
    const name = interval(1000).pipe(map(x=> 'name ' + (x+1)),take(3));
    const age = interval(2000).pipe(map(x=> 'age ' + (x+1)),take(3));
    const group = interval(3000).pipe(map(x=> 'group ' + (x+1)),take(3));

    concat(name,age,group).subscribe(res=>{
      this.du.print(res, 'elContainer')
    })

    const person = from(['Karan Mishra','Harry Potter','Tom Holland'])

    person
    .pipe(
      map(x => this.getData(x)),
      concatAll()
      )
    .subscribe(res=>{
      this.du.print(res ,'elContainer1')
    })

    person
    .pipe(
      concatMap(x => this.getData(x)),

      )
    .subscribe(res=>{
      this.du.print(res ,'elContainer2')
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




