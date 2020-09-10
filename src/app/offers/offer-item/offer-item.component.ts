import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OffersService } from '../offers.service';
import { Offer } from '../offer.model';

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
    private offfersService: OffersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.offfersService
        .getOfferBySlug(params.slug)
        .subscribe((offer: Offer) => {
          this.offer = offer;
          console.log(this.offer);
          this.isLoading = false;
        });
    });
  }
}
