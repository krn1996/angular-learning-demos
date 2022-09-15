import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgrxComponent } from 'src/app/modules/ngrx/ngrx/ngrx.component';


const routes: Routes = [
  {
    path:'',
    component: NgrxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxRoutingModule { }
