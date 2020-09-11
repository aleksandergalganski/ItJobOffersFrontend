import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OffersService } from '../offers.service';
import { Offer } from '../offer.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent implements OnInit {
  isLoading: boolean = true;
  offer: Offer;

  constructor(
    private route: ActivatedRoute,
    private offfersService: OffersService,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.offfersService
        .getOfferBySlug(params.slug)
        .subscribe((offer: Offer) => {
          this.offer = offer;
          this.isLoading = false;
        });
    });
  }

  onAddToWatchOffers() {
    const result = this.offfersService.addWatchedOffer(this.offer);
    const translate = result
      ? 'OFFER_ITEM.MESSAGE_SUCCESS'
      : 'OFFER_ITEM.MESSAGE_ERROR';

    this.translateService.get(translate).subscribe((message) => {
      this.openSnackBar(message);
    });
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 2000,
    });
  }
}
