import { Component, OnInit } from '@angular/core';
import {IProduct} from './products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

  products : IProduct [] = [];
  constructor() {}
    
  

  ngOnInit(): void {
      this.products = [
        {
        productId : 100,
        productName : "Apple",
        price : 109,
        imageUrl : "src\assets\img\download.png"

      },
      {
        productId : 101,
        productName : "Oranges",
        price : 90,
        imageUrl : "src\assets\img\download.png"

      },
      {
        productId : 102,
        productName : "Banana",
        price : 109,
        imageUrl : "src\assets\img\download.png"

      }
    ]
  }

}
