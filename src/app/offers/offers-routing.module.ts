import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfferItemComponent } from './offer-item/offer-item.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { WatchedOffersComponent } from './watched-offers/watched-offers.component';

const routes: Routes = [
  { path: '', component: OffersListComponent },
  {
    path: 'watchedoffers',
    component: WatchedOffersComponent,
    pathMatch: 'full',
  },
  { path: ':slug', component: OfferItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersRoutingModule {}
