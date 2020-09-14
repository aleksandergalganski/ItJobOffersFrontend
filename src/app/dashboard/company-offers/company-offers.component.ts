import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { OffersService } from 'src/app/offers/offers.service';
import { Offer } from '../../offers/offer.model';

@Component({
  selector: 'app-company-offers',
  templateUrl: './company-offers.component.html',
  styleUrls: ['./company-offers.component.scss'],
})
export class CompanyOffersComponent implements OnInit, OnDestroy {
  @Input() companyId: string;
  isLoading: boolean = true;
  offers: Offer[];
  offerAddedSubscription: Subscription;

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.fetchOffers();
    this.offerAddedSubscription = this.offersService.offerAddedSubject.subscribe(
      (offer: Offer) => {
        this.offers.push(offer);
      }
    );
  }

  private fetchOffers() {
    this.isLoading = true;
    this.offersService
      .getOfferByCompany(this.companyId)
      .subscribe((offers: Offer[]) => {
        this.offers = offers;
        this.isLoading = false;
      });
  }

  onDeleteOffer(offerId: string) {
    this.offers = this.offers.filter((offer: Offer) => offer._id !== offerId);
  }

  onUpdateOffer() {
    this.fetchOffers();
  }

  ngOnDestroy() {
    if (this.offerAddedSubscription) {
      this.offerAddedSubscription.unsubscribe();
    }
  }
}
