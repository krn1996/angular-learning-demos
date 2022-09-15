import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './modules/rxjs/components/rxjs/rxjs.component';


const routes: Routes = [
  {
    path: 'rxjs',
    loadChildren: () => import('./modules/rxjs/rxjs.module').then(m => m.RxjsModule)
  },
  {
    path: 'ngrx',
    loadChildren: () => import('./modules/ngrx/ngrx.module').then(m => m.NgrxModule)
  },
  { path: '', redirectTo: '/rxjs', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
