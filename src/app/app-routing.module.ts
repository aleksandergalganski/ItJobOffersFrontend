import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferItemComponent } from './offers/offer-item/offer-item.component';
import { OffersListComponent } from './offers/offers-list/offers-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'offers', pathMatch: 'full' },
  { path: 'offers', component: OffersListComponent },
  { path: 'offers/:slug', component: OfferItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
