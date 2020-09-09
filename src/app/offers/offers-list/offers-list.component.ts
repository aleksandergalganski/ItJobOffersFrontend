import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSelect } from '@angular/material/select';

import { Offer } from '../offer.model';
import { OfferSearch } from '../offer-search.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  offers: Offer[];
  pagination: {
    next?: {
      page: number;
      limit: number;
    };
    prev?: {
      page: number;
      limit: number;
    };
  };
  isLoading: boolean = false;
  offerSearch: OfferSearch = {};
  @ViewChild('technology', { static: true }) technology: MatSelect;
  @ViewChild('city', { static: true }) city: MatSelect;
  @ViewChild('experienceLevel', { static: true }) experienceLevel: MatSelect;
  @ViewChild('category', { static: true }) category: MatSelect;
  page: number = 1;

  cities = ['Gdansk', 'Poznan', 'Warszawa'];
  categories = ['Frontend', 'Backend', 'Devops'];
  technologies = ['Java', 'JavaScript', 'Python', 'Angular'];
  levels = ['Junior', 'Mid', 'Senior'];

  constructor(
    private offersService: OffersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.isLoading = true;
      console.log(params);
      this.offersService.getAllOffers(params.page).subscribe((res: any) => {
        this.offers = res.data;
        this.pagination = res.pagination;
        this.isLoading = false;
      });
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
    this.resetMatSelectsValues();
    this.router.navigate([], {
      queryParams: {
        page: '1',
      },
    });
  }

  onLoadNext() {
    this.router.navigate([], {
      queryParams: {
        page: ++this.page,
      },
    });
  }

  onLoadPrev() {
    this.router.navigate([], {
      queryParams: {
        page: --this.page,
      },
    });
  }

  private resetMatSelectsValues() {
    this.experienceLevel.value = undefined;
    this.category.value = undefined;
    this.city.value = undefined;
    this.technology.value = undefined;
  }
}
