import { InMemeoryDataService } from './in-memeory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product/product.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './reuse-strategy';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemeoryDataService, { dataEncapsulation: false })
         
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy },],
  bootstrap: [AppComponent]
})
export class AppModule { }
