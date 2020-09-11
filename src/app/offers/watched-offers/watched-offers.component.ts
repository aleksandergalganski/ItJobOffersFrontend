import { Component, OnInit, OnDestroy } from '@angular/core';

import { OffersService } from '../offers.service';
import { Offer } from '../offer.model';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

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
    private snackBar: MatSnackBar,
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
      this.openSnackBar(message);
    });
  }

  ngOnDestroy() {
    if (this.offersLengthChangeSubscribtion) {
      this.offersLengthChangeSubscribtion.unsubscribe();
    }
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 2000,
    });
  }
}
