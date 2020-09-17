import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OffersService } from 'src/app/offers/offers.service';
import { CompaniesService } from '../companies.service';
import { Company } from '../company.model';
import { Offer } from '../../offers/offer.model';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss'],
})
export class CompanyItemComponent implements OnInit {
  isLoading = true;
  company: Company;
  offers: Offer[];

  constructor(
    private companiesService: CompaniesService,
    private route: ActivatedRoute,
    private offfersService: OffersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.companiesService
        .getCompanyBySlug(params.slug)
        .subscribe((company: Company) => {
          this.company = company;

          this.offfersService
            .getOfferByCompany(this.company._id)
            .subscribe((offers: Offer[]) => {
              this.offers = offers;
              this.isLoading = false;
            });
        });
    });
  }
}
