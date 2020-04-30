import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }, 
{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
 { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
   { path: 'billing', loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule) },
{ path: 'navbar', loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule) },
{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
