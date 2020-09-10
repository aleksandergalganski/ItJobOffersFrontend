import { Component, OnInit, OnDestroy } from '@angular/core';

import { OffersService } from '../offers.service';
import { Offer } from '../offer.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-watched-offers',
  templateUrl: './watched-offers.component.html',
  styleUrls: ['./watched-offers.component.scss'],
})
export class WatchedOffersComponent implements OnInit, OnDestroy {
  offers: Offer[];
  offersLengthChangeSubscribtion: Subscription;

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.fetchWatchedOffers();
    this.offersLengthChangeSubscribtion = this.offersService.watchedOffersLengthChanged.subscribe(
      () => {
        this.fetchWatchedOffers();
      }
    );
  }

  fetchWatchedOffers() {
    this.offers = this.offersService.getWatchedOffers();
  }

  onDeleteOffer(id: string) {
    this.offersService.deleteWatchedOffer(id);
  }

  ngOnDestroy() {
    if (this.offersLengthChangeSubscribtion) {
      this.offersLengthChangeSubscribtion.unsubscribe();
    }
  }
}
