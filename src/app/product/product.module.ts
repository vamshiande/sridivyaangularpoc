import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';



@NgModule({
  declarations: [ProductComponent, ProductdetailsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
    
  ]
})
export class ProductModule {
  
 }
