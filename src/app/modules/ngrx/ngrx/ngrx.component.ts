import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { UserState } from '../reducers/user.reducer';
import { InitialUsers } from '../selectors/user.selector';
import { getAllUsers } from '../actions/user.action';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent implements OnInit {
  users$:Observable<User[]>
  private map: L.Map;

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  count$: Observable<UserState>;

  constructor(private userService: UserService,private store: Store<UserState>) {
  }

  ngOnInit(): void {
    debugger
    console.log(this.getas());

    this.store.dispatch(new getAllUsers())
    this.getInitial()
  }

  getInitial(){
    this.users$ = this.store.select<any>(InitialUsers)
  }
    getas(){
      try{
        console.log(this.userService.getB())
      }
      catch(E){
        console.log(E);

      }
  }

}
