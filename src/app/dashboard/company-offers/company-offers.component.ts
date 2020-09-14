import { Component, Input, OnInit } from '@angular/core';

import { OffersService } from 'src/app/offers/offers.service';
import { Offer } from '../../offers/offer.model';

@Component({
  selector: 'app-company-offers',
  templateUrl: './company-offers.component.html',
  styleUrls: ['./company-offers.component.scss'],
})
export class CompanyOffersComponent implements OnInit {
  @Input() companyId: string;
  isLoading: boolean = true;
  offers: Offer[];

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.fetchOffers();
  }

  private fetchOffers() {
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
}
