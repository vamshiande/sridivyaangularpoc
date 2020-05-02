import { IProduct } from './products';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService  {

  private productsURl='api/products';
  
     constructor(private http: HttpClient){}

     getProducts():Observable<IProduct[]>{

        return this.http.get<IProduct[]>(this.productsURl);

     }

     getProduct(id:number):Observable<IProduct[]>{

      return this.http.get<IProduct[]>(this.productsURl).pipe(
        map(result =>
          result.filter(one => one.productId === id)
        )
      // .pipe(        
      //  filter(products=>products.productId==id)
        
      );

   }
  

}
