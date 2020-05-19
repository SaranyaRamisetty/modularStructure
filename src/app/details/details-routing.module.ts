import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeatilOneComponent } from './deatil-one/deatil-one.component';


const routes: Routes = [
  {
    path: '',
    component: DeatilOneComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
