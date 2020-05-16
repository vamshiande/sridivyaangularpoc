import { IProduct } from './../product/products';
import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public newProduct :  IProduct;

  productForm = new FormGroup({
  productName : new FormControl(''),
  productId : new FormControl(''),
  price : new FormControl(''),
  imageUrl : new FormControl(''),
  Description : new FormControl('')

});
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.newProduct=this.productForm.value;

    this.productService.products.pipe(take(1)).subscribe(val => {
      console.log(val)
      const newArr = [...val, this.newProduct];
      this.productService.productSource.next(newArr);
      console.log(newArr);
    })
  }

  addProduct1(){
    console.log(this.productForm.value);
    //this.newProduct=this.productForm.value;


 
  

    // this.newProduct.productId = this.productForm.value.productId;
    // this.newProduct.productName = this.productForm.value.productName;
    // this.newProduct.productId = this.productForm.value.productId;
    // this.newProduct.productId = this.productForm.value.productId;
    // this.newProduct.productId = this.productForm.value.productId;
  }
}
