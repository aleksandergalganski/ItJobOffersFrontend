import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Offer } from '../offer.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  offers: Offer[];
  isLoading: boolean = true;

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.offersService.getAllOffers().subscribe((offers: Offer[]) => {
      this.offers = offers;
      this.isLoading = false;
    });
  }
}
