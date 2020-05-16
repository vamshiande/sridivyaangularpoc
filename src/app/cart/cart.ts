import { IProduct } from './../product/products';

export interface ICart extends IProduct{
    quantity : number;    
    
}