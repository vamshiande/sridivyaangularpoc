
import { ICart } from './../cart/cart';
import { IProduct } from './products';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { map,filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService  {

  private productsURl='api/products';

  public addedToCartMessage="";

   productSource = new BehaviorSubject<IProduct[]>([]);
  products = this.productSource.asObservable();

  private selectedProductSource = new BehaviorSubject<IProduct>(null);
  selectedProduct = this.selectedProductSource.asObservable();

  // private cartSource= new BehaviorSubject<IProduct[]>(null);
  // cartList = this.cartSource.asObservable();

  public cartList:ICart[]=[];
  

  public productss :  IProduct[];  

     constructor(private http: HttpClient){}

    getProducts():Observable<IProduct[]>{
     return this.http.get<IProduct[]>(this.productsURl);
    }
    
     getProducts1(){


      var  productsArray  = this.http.get<IProduct[]>(this.productsURl)
      .subscribe(singleproduct=>{this.productSource.next(singleproduct)});       
 
      }

      getSelectedProd(id:number){

        var selectedProd = this.products.pipe(
          map(products=>products.filter(product=>product.productId==id))        
        ).subscribe(selprod=>{this.selectedProductSource.next(selprod[0])});
        
      }

      cartAddedProd(cartItem:ICart){
        var x= this.cartList.find(cart=>cart.productId==cartItem.productId);
        if(x){
          //const y = this.cartList.filter(cart=>{cart.productId===cartItem.productId});
          x.quantity = cartItem.quantity+ x.quantity;
          this.cartList.find(cart=>cart.productId==cartItem.productId).quantity=x.quantity;
        }else
        this.cartList.push(cartItem);       
        
      }



   
  

}
