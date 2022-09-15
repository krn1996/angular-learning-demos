import { Component, OnInit } from '@angular/core';
import { concatMap, delay, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const switched = of(1, 2, 3).pipe(
      switchMap(
        x => of(x).pipe(delay(1000))
        )
        );
  switched.subscribe(x => console.log(x));

  const merge = of(1, 2, 3).pipe(
    mergeMap(
      x => of(x).pipe(delay(1000))
      )
      );
merge.subscribe(x => console.log(x , "Merge"));

const concat = of(1, 2, 3).pipe(
  concatMap(
    x => of(x).pipe(delay(1000))
    )
    );
concat.subscribe(x => console.log(x , "Concat"));


  }

}
