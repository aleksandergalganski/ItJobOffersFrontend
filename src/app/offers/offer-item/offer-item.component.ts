import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OffersService } from '../offers.service';
import { Offer } from '../offer.model';
import { TranslateService } from '@ngx-translate/core';
import { SnackBarService } from 'src/app/shared/snackbar.service';

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
    private translateService: TranslateService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.scrollTop();
    this.route.params.subscribe((params) => {
      this.offfersService
        .getOfferBySlug(params.slug)
        .subscribe((offer: Offer) => {
          this.offer = offer;
          this.isLoading = false;
        });
    });
  }

  private scrollTop() {
    window.scroll({
      behavior: 'smooth',
      top: 0,
    });
  }

  onAddToWatchOffers() {
    const result = this.offfersService.addWatchedOffer(this.offer);
    const translate = result
      ? 'OFFER_ITEM.MESSAGE_SUCCESS'
      : 'OFFER_ITEM.MESSAGE_ERROR';

    this.translateService.get(translate).subscribe((message) => {
      this.snackBarService.showSnackBar(message, 'OK');
    });
  }
}
