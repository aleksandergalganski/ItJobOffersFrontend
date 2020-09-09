import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferItemComponent } from './offers/offer-item/offer-item.component';
import { OffersListComponent } from './offers/offers-list/offers-list.component';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { CompanyItemComponent } from './companies/company-item/company-item.component';
import { AddOfferComponent } from './offers/add-offer/add-offer.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'offers?page=1', pathMatch: 'full' },
  { path: 'offers', component: OffersListComponent },
  { path: 'offers/:slug', component: OfferItemComponent },
  { path: 'companies', component: CompaniesListComponent },
  { path: 'companies/:slug', component: CompanyItemComponent },
  { path: 'addoffer', component: AddOfferComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
