import { Component, Input, OnInit } from '@angular/core';
import { Offer } from 'src/app/offers/offer.model';

@Component({
  selector: 'app-company-offer-item',
  templateUrl: './company-offer-item.component.html',
  styleUrls: ['./company-offer-item.component.scss'],
})
export class CompanyOfferItemComponent implements OnInit {
  @Input() offer: Offer;

  constructor() {}

  ngOnInit(): void {}
}
