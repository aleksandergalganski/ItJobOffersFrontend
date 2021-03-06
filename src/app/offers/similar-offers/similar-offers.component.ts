import { Component, Input, OnInit } from '@angular/core';

import { OffersService } from '../offers.service';
import { Offer } from '../offer.model';
import { OfferSearch } from '../offer-search.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-similar-offers',
  templateUrl: './similar-offers.component.html',
  styleUrls: ['./similar-offers.component.scss'],
})
export class SimilarOffersComponent implements OnInit {
  @Input() city?: string;
  @Input() category?: string;
  @Input() currentOfferId: string;
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
      city: this.city ? this.city : 'Remote',
      category: this.category,
    };

    this.offersService
      .searchForOffers(this.offersSearch, 1, 5)
      .subscribe((offers: Offer[]) => {
        console.log('Before: ', offers);
        console.log('Current offer', this.currentOfferId);
        this.offers = offers.filter(
          (offer: Offer) => offer._id !== this.currentOfferId
        );
        console.log('After: ', this.offers);
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
