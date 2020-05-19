import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule2RoutingModule } from './shared-module2-routing.module';
import { Module2cComponent } from './module2c/module2c.component';
import { Module3cComponent } from './module3c/module3c.component';


@NgModule({
  declarations: [Module2cComponent, Module3cComponent],
  imports: [
    CommonModule,
    SharedModule2RoutingModule
  ]
})
export class SharedModule2Module { }
