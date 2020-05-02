import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import {IProduct} from './products';
import { Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

 public products :  IProduct[];
 public filteredProduct:  IProduct[];
 public product :  IProduct;
  constructor(private productService:ProductService) {}
    
  

  ngOnInit(): void {

    this.productService.getProducts()
    .subscribe(prod =>{this.products=prod}

      );
     
  }

getProductDetails(id:number)
{
  this.productService.getProduct(id).pipe(
    map(result =>
      result.filter(one => one.productId === id)
    )
  ).subscribe(results => this.filteredProduct=results )

}
  
  
  
  // .subscribe(prod=>
  //   {
  //     this.filteredProduct=prod
  //   });
  // this.product =this.filteredProduct[0];




}
