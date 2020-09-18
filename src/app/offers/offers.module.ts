import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OfferItemComponent } from './offer-item/offer-item.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { SimilarOffersComponent } from './similar-offers/similar-offers.component';
import { OfferApplyComponent } from './offer-apply/offer-apply.component';
import { WatchedOffersComponent } from './watched-offers/watched-offers.component';
import { OffersRoutingModule } from './offers-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OfferItemComponent,
    OffersListComponent,
    SimilarOffersComponent,
    OfferApplyComponent,
    WatchedOffersComponent,
  ],
  imports: [RouterModule, OffersRoutingModule, SharedModule],
})
export class OffersModule {}
