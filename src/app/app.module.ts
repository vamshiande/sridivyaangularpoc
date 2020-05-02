import { InMemeoryDataService } from './in-memeory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product/product.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemeoryDataService, { dataEncapsulation: false })
         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
