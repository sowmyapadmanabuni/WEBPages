import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorouselComponent } from './corousel/corousel.component';
import { from } from 'rxjs';
import { ProductsComponent } from './products/products.component';
import { PartnersComponent } from './partners/partners.component';
import { LocationComponent } from './location/location.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    CorouselComponent,
    ProductsComponent,
    PartnersComponent,
    LocationComponent,
    AboutusComponent,
    BlogsComponent,
    HomeComponent,
    ClientsComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
