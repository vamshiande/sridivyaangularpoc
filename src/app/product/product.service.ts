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
  private productSource = new BehaviorSubject<IProduct[]>([]);
  products = this.productSource.asObservable();

  public productss :  IProduct[];

  

     constructor(private http: HttpClient){}

    getProducts():Observable<IProduct[]>{
     return this.http.get<IProduct[]>(this.productsURl);
    }

    
    
     getProducts1(){
      var  productsArray  = this.http.get<IProduct[]>(this.productsURl)
      .subscribe(singleproduct=>{this.productSource.next(singleproduct)});       
 
      }


    // getSelectedProducts(id:number):Observable<IProduct[]{
    //   return this.http.get<IProduct[]>(this.productsURl);
    // }
  

}
