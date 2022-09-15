import { Component, OnInit } from '@angular/core';
import { concat, from, interval, map, merge, mergeAll, mergeMap, of, take } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor(private du:DesignUtilityService) { }

  ngOnInit(): void {
    const name = interval(1000).pipe(map(x=> 'name ' + (x+1)),take(3));
    const age = interval(2000).pipe(map(x=> 'age ' + (x+1)),take(3));
    const group = interval(3000).pipe(map(x=> 'group ' + (x+1)),take(3));

    merge(name,age,group).subscribe(res=>{
      this.du.print(res, 'elContainer')
    })

    const person = from(['Karan Mishra','Harry Potter','Tom Holland'])

    person
    .pipe(
      map(x => this.getData(x)),
      mergeAll()
      )
    .subscribe(res=>{
      this.du.print(res ,'elContainer1')
    })

    person
    .pipe(
      mergeMap(x => this.getData(x)),

      )
    .subscribe(res=>{
      this.du.print(res ,'elContainer2')
    })

  }

  getData(val){
    return of(val + ' in Marvel Universe.');
  }
}
