import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { OffersService } from '../offers.service';
import { Offer } from '../offer.model';
import { SnackBarService } from '../../shared/snackbar.service';

@Component({
  selector: 'app-watched-offers',
  templateUrl: './watched-offers.component.html',
  styleUrls: ['./watched-offers.component.scss'],
})
export class WatchedOffersComponent implements OnInit, OnDestroy {
  offers: Offer[];
  offersLengthChangeSubscribtion: Subscription;

  constructor(
    private offersService: OffersService,
    private snackBarService: SnackBarService,
    private translateService: TranslateService
  ) {}

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
    this.translateService.get('SAVED.DELETE_MESSAGE').subscribe((message) => {
      this.snackBarService.showSnackBar(message, 'OK');
    });
  }

  ngOnDestroy() {
    if (this.offersLengthChangeSubscribtion) {
      this.offersLengthChangeSubscribtion.unsubscribe();
    }
  }
}
