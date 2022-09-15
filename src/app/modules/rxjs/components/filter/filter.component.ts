import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  ex1;
  nestedUsers = [{
    name:'Karan',
    age:24,
    gender:'male',
    address : {
      city: 'Rewari',
      state : 'Haryana'
    }
  },{
    name:'Ankur',
    age:23,
    gender:'male',
    address : {
      city: 'Karol Bagh',
      state : 'Delhi'
    }
  },{
    name:'Niharika',
    age:22,
    gender:'female',
    address : {
      city: 'Gurgaon',
      state : 'Haryana'
    }
  }]
  ex2;
  constructor(private du: DesignUtilityService) { }

  ngOnInit(): void {
    const source = from(this.nestedUsers)
    source
    .pipe(
      filter(data => {return data.name.length < 6}),
      toArray()
    )
    .subscribe(res=>{
      this.ex1 = res
    })

    source
    .pipe(
      filter(data => {return data.gender == 'female'}),
      toArray()
    )
    .subscribe(res=>{
      this.ex2 = res
    })
  }

}
