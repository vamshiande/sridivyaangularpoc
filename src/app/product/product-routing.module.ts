import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: '', 
  component: ProductComponent,
  children:[

    { path: ':id',  component: ProductdetailsComponent } 

  ]

},
    
  
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
