import { Component, OnInit, ViewChild } from '@angular/core';

import { Offer } from '../offer.model';
import { OfferSearch } from '../offer-search.model';
import { OffersService } from '../offers.service';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  offers: Offer[];
  isLoading: boolean = false;
  offerSearch: OfferSearch = {};
  @ViewChild('technology', { static: true }) technology: MatSelect;
  @ViewChild('city', { static: true }) city: MatSelect;
  @ViewChild('experienceLevel', { static: true }) experienceLevel: MatSelect;
  @ViewChild('category', { static: true }) category: MatSelect;

  cities = ['Gdansk', 'Poznan', 'Warszawa'];
  categories = ['Frontend', 'Backend', 'Devops'];
  technologies = ['Java', 'JavaScript', 'Python', 'Angular'];
  levels = ['Junior', 'Mid', 'Senior'];

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.offersService.getAllOffers().subscribe((offers: Offer[]) => {
      this.offers = offers;
      this.isLoading = false;
    });
  }

  onChangeInput() {
    this.isLoading = true;
    this.offersService
      .searchForOffers(this.offerSearch)
      .subscribe((offers: Offer[]) => {
        this.offers = offers;
        this.isLoading = false;
      });
  }

  onResetAll() {
    this.isLoading = true;
    this.resetMatSelectsValues();
    this.offersService.getAllOffers().subscribe((offers: Offer[]) => {
      this.offers = offers;
      this.isLoading = false;
    });
  }

  resetMatSelectsValues() {
    this.experienceLevel.value = undefined;
    this.category.value = undefined;
    this.city.value = undefined;
    this.technology.value = undefined;
  }
}
