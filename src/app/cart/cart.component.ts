import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';
import { ICart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(public productService: ProductService) { }

  cartList:ICart[]=[];

  ngOnInit(): void {
    this.cartLists();
  }

  cartLists(){
    this.cartList=this.productService.cartList;
  }
  

}
