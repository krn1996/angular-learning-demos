import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';
import { DesignUtilityService } from '../../service/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private du:DesignUtilityService) { }

  ngOnInit(): void {
    const members = ['Father','Mother','Son','Daughter']
    from(members)
    .pipe(
      map(data=>{return 'Members ' + data})
    )
    .subscribe(res=>{
      console.log(res)
      this.du.print(res,'elContainer')
    })
  }

}
