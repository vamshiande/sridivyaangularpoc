import { ICart } from './../../cart/cart';
import { IProduct } from './../products';
import { ProductService } from './../product.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor( public productService: ProductService) { }
  @Input() productDetails:IProduct;
  public AddedProd : IProduct[];
  @Input() addedProd1 : String = "";
  public cartList : ICart[];
  public cartItem : ICart;
  public quantity:[] ;
  public obj1 = {quantity : 1};
  public quantity1:number = 1;
  public addCartMessage:string;
  

  ngOnInit(): void {
    this.logd();
    
        }

      

      testDropdownSelectValue(){

        console.log(this.quantity);
        }

        handleSelectedValue(event : any){
          this.quantity1 = event.target.value;                   
          console.log(this.quantity1);
        }

  AddToCart(){
    
    this.cartItem = Object.assign({},this.productDetails,{quantity:this.quantity1}); 
    this.productService.cartAddedProd(this.cartItem);
    this.productService.addedToCartMessage = "Item is added to cart";
    this.quantity1=1;
     
  }

  logd()
  {
    this.productService.selectedProduct.subscribe((prod=>{

      console.log(this.addCartMessage="this is called");
    }))


  }


  removeMessage()
  {
    this.productService.addedToCartMessage="";

  }

  noofItems(){

  }

}
