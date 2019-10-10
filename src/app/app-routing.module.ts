import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { PartnersComponent } from './partners/partners.component';
import { LocationComponent } from './location/location.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
{ path: '',redirectTo:'home', pathMatch: 'full'},
{path:'home',component:HomeComponent},
{path:'products',component:ProductsComponent},
{path:'clients',component:ClientsComponent},
{path:'partners',component:PartnersComponent},
{path:'location',component:LocationComponent},
{path:'aboutus',component:AboutusComponent},
{path:'blogs',component:BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
