import { NgModule, Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingsComponent } from './listings/listings.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
{ path: '', component: LandingPageComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'listings', component: ListingsComponent },
{ path: 'navbar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }