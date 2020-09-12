import { Component, Input, OnInit } from '@angular/core';

import { OffersService } from '../offers.service';
import { Offer } from '../offer.model';
import { OfferSearch } from '../offer-search.model';

@Component({
  selector: 'app-similar-offers',
  templateUrl: './similar-offers.component.html',
  styleUrls: ['./similar-offers.component.scss'],
})
export class SimilarOffersComponent implements OnInit {
  @Input() city?: string;
  @Input() category?: string;
  offers: Offer[];
  offersSearch: OfferSearch = {};
  translateParams = {};
  isLoading: boolean = true;

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    if (this.city) {
      this.offersSearch.city = this.city;
    }

    if (this.category) {
      this.offersSearch.category = this.category;
    }

    this.translateParams = {
      city: this.city,
      category: this.category,
    };

    this.offersService
      .searchForOffers(this.offersSearch, 1, 5)
      .subscribe((offers: Offer[]) => {
        this.offers = offers;
        this.isLoading = false;
      });
  }

  onScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
