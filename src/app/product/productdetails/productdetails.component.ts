import { IProduct } from './../products';
import { ProductService } from './../product.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor( private productService: ProductService) { }
  @Input() productDetails:IProduct;



  ngOnInit(): void {

        

  }

}
