import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Offer } from './offer.model';
import { OfferSearch } from './offer-search.model';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private httpClient: HttpClient) {}

  getAllOffers(page: number = 1): Observable<PaginationReponse> {
    return this.httpClient.get<PaginationReponse>(
      'http://localhost:5000/api/v1/offers',
      {
        params: new HttpParams().set('page', page.toString()),
      }
    );
  }

  searchForOffers(
    offersSearch: OfferSearch,
    page: number = 1
  ): Observable<Offer[]> {
    let params = new HttpParams();

    if (offersSearch.category) {
      params = params.append('category[in]', offersSearch.category);
    }

    if (offersSearch.city) {
      params = params.append('city[in]', offersSearch.city);
    }

    if (offersSearch.technology) {
      params = params.append('mustHave[in]', offersSearch.technology);
    }

    if (offersSearch.experienceLevel) {
      params = params.append(
        'experienceLevel[in]',
        offersSearch.experienceLevel
      );
    }

    if (offersSearch.isRemote) {
      params = params.append('isRemote', offersSearch.isRemote.toString());
    }

    return this.httpClient
      .get('http://localhost:5000/api/v1/offers', {
        params: params,
      })
      .pipe(
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

export interface PaginationReponse {
  success: boolean;
  count: number;
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
  data: Offer[];
}
