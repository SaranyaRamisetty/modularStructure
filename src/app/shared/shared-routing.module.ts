import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsOffersComponent } from './products-offers/products-offers.component';


const routes: Routes = [
  {
    path: 'prouctList',
    component: ProductsListComponent
    },
    {
      path: 'prouctOffers',
      component: ProductsOffersComponent
      },
  {
    path:'sharedModule2',
    loadChildren: () => import('./shared-module2/shared-module2.module').then(m => m.SharedModule2Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
