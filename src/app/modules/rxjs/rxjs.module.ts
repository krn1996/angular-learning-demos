import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { TimerAndIntervalComponent } from './components/timer-and-interval/timer-and-interval.component';
import { OfAndFromComponent } from './components/of-and-from/of-and-from.component';
import { ToArrayComponent } from './components/to-array/to-array.component';
import { MapComponent } from './components/map/map.component';
import { PluckComponent } from './components/pluck/pluck.component';
import { FilterComponent } from './components/filter/filter.component';
import { CustomObservableComponent } from './components/custom-observable/custom-observable.component';
import { DebounceComponent } from './components/debounce/debounce.component';
import {MatInputModule} from '@angular/material/input';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { DiffMapsComponent } from './components/diff-maps/diff-maps.component';
import { HttpClientModule } from '@angular/common/http';
import { DesignUtilityService } from './service/design-utility.service';


@NgModule({
  declarations: [
    RxjsComponent,
    FromEventComponent,
    TimerAndIntervalComponent,
    OfAndFromComponent,
    ToArrayComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    CustomObservableComponent,
    DebounceComponent,
    ConcatMapComponent,
    MergeMapComponent,
    SwitchMapComponent,
    DiffMapsComponent,
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [DesignUtilityService],
})
export class RxjsModule { }
