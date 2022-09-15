import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgrxComponent } from './ngrx/ngrx.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { reduce } from 'rxjs';
import { reducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effect';

@NgModule({
  declarations: [NgrxComponent],
  imports: [
    CommonModule,
    NgrxRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducer, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [UserService],
})
export class NgrxModule {}
