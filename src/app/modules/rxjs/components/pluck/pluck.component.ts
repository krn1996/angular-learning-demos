import { Component, OnInit } from '@angular/core';
import { from, pluck } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {
users= [{
  name:'Karan',
  age:24
},{
  name:'Ankur',
  age:23
}]

nestedUsers = [{
  name:'Karan',
  age:24,
  address : {
    city: 'Rewari',
    state : 'Haryana'
  }
},{
  name:'Ankur',
  age:23,
  address : {
    city: 'Karol Bagh',
    state : 'Delhi'
  }
}]
  constructor(private du:DesignUtilityService) { }

  ngOnInit(): void {
    from(this.users)
    .pipe(
      pluck('name')
    )
    .subscribe(res=>{
      this.du.print(res,'elContainer')
    })

    from(this.nestedUsers)
    .pipe(
      pluck('address','city')
    )
    .subscribe(res=>{
      this.du.print(res,'elContainer2')
    })
  }

}
