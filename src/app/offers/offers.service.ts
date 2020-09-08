import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Offer } from './offer.model';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private httpClient: HttpClient) {}

  getAllOffers(): Observable<Offer[]> {
    return this.httpClient.get('http://localhost:5000/api/v1/offers').pipe(
      map((res: { success: boolean; data: Offer[] }) => {
        return res.data;
      })
    );
  }

  getOfferById(id: string): Observable<Offer> {
    return this.httpClient.get(`api/v1/offers/${id}`).pipe(
      map((res: { success: boolean; data: Offer }) => {
        return res.data;
      })
    );
  }

  createOffer(offer: Offer): Observable<Offer> {
    return this.httpClient.post('api/v1/offers', offer).pipe(
      map((res: { success: boolean; data: Offer }) => {
        return res.data;
      })
    );
  }

  updateOffer(id: string, offer: Offer): Observable<Offer> {
    return this.httpClient.post(`api/v1/offers/${id}`, offer).pipe(
      map((res: { success: boolean; data: Offer }) => {
        return res.data;
      })
    );
  }

  deleteOffer(id: string): Observable<any> {
    return this.httpClient.delete(`api/v1/offers/${id}`);
  }
}
