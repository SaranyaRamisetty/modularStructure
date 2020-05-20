import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module2cComponent } from './module2c/module2c.component';
import { Module3cComponent } from './module3c/module3c.component';


const routes: Routes = [
  {
    path: 'module2Comp',
    component: Module2cComponent
  }, {
    path: 'module3Compo',
    component: Module3cComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModule2RoutingModule { }
