import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from 'src/app/modules/rxjs/components/rxjs/rxjs.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { CustomObservableComponent } from './components/custom-observable/custom-observable.component';
import { DebounceComponent } from './components/debounce/debounce.component';
import { DiffMapsComponent } from './components/diff-maps/diff-maps.component';
import { FilterComponent } from './components/filter/filter.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { MapComponent } from './components/map/map.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { OfAndFromComponent } from './components/of-and-from/of-and-from.component';
import { PluckComponent } from './components/pluck/pluck.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { TimerAndIntervalComponent } from './components/timer-and-interval/timer-and-interval.component';
import { ToArrayComponent } from './components/to-array/to-array.component';


const routes: Routes = [
  {
    path:'',
    component: RxjsComponent
  },
  {
    path:'fromevent',
    component: FromEventComponent
  },
  {
    path:'timer-interval',
    component:TimerAndIntervalComponent
  },
  {
    path:'of-from',
    component:OfAndFromComponent
  },
  {
    path:'to-array',
    component:ToArrayComponent
  },
  {
    path:'custom-observable',
    component:CustomObservableComponent
  },
  {
    path:'map',
    component:MapComponent
  },
  {
    path:'pluck',
    component:PluckComponent
  },
  {
    path:'filter',
    component:FilterComponent
  },
  {
    path: 'debounce',
    component: DebounceComponent
  },
  {
    path: 'concat',
    component: ConcatMapComponent
  },
  {
    path: 'merge',
    component: MergeMapComponent
  },
  {
    path: 'diff',
    component: DiffMapsComponent
  },
  {
    path: 'sm',
    component: SwitchMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
