import { IProduct } from './product/products';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemeoryDataService implements InMemoryDbService {

  createDb() {
    const products = [
      {
      productId : 100,
      productName : "Apple",
      price : 109,
      imageUrl : "assets/img/download.png",
      description : "sweet fuji apples"

    },
    {
      productId : 101,
      productName : "Oranges",
      price : 90,
      imageUrl : "assets/img/orange-600x600-500x500.jpg",
      description : "premium seedless oranges"
    },
    {
      productId : 102,
      productName : "Banana",
      price : 109,
      imageUrl : "assets/img/banana.jpg",
      description : "tasty yellow banana"
    }
  ];
    return {products};

  }
      // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: IProduct[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.productId)) + 1 : 100;
  }

}
