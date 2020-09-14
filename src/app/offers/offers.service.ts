import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Offer } from './offer.model';
import { OfferSearch } from './offer-search.model';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  watchedOffersLengthChanged = new BehaviorSubject<number>(
    this.getWatchedOffersLength()
  );

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
    page: number = 1,
    limit?: number
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

    if (limit) {
      params = params.append('limit', limit.toString());
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

  getOfferByCompany(companyId: string): Observable<Offer[]> {
    return this.httpClient
      .get('http://localhost:5000/api/v1/offers', {
        params: new HttpParams().set('company', companyId),
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

  getOfferBySlug(slug: string): Observable<Offer> {
    return this.httpClient
      .get(`http://localhost:5000/api/v1/offers/slug/${slug}`)
      .pipe(
        map((res: { success: boolean; data: Offer }) => {
          return res.data;
        })
      );
  }

  createOffer(companyId: string, offer: Offer): Observable<Offer> {
    return this.httpClient
      .post(`http://localhost:5000/api/v1/companies/${companyId}/offers`, offer)
      .pipe(
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
    return this.httpClient.delete(`http://localhost:5000/api/v1/offers/${id}`);
  }

  addWatchedOffer(offer: Offer): boolean {
    if (localStorage.getItem('watchedOffers')) {
      const offers: Offer[] = JSON.parse(localStorage.getItem('watchedOffers'));

      const duplicate = offers.find(
        (offerEl: Offer) => offerEl._id === offer._id
      );

      if (!duplicate) {
        offers.push(offer);
        localStorage.setItem('watchedOffers', JSON.stringify(offers));
        this.watchedOffersLengthChanged.next(this.getWatchedOffersLength());
        return true;
      }
      return false;
    } else {
      const offersStr = JSON.stringify([offer]);
      localStorage.setItem('watchedOffers', offersStr);
      this.watchedOffersLengthChanged.next(this.getWatchedOffersLength());
      return true;
    }
  }

  deleteWatchedOffer(id: string) {
    let offers: Offer[] = JSON.parse(localStorage.getItem('watchedOffers'));
    offers = offers.filter((offer: Offer) => offer._id !== id);
    localStorage.setItem('watchedOffers', JSON.stringify(offers));

    this.watchedOffersLengthChanged.next(this.getWatchedOffersLength());
  }

  getWatchedOffers(): Offer[] {
    return JSON.parse(localStorage.getItem('watchedOffers'));
  }

  getWatchedOffersLength(): number {
    const offers = JSON.parse(localStorage.getItem('watchedOffers'));

    if (offers) {
      return JSON.parse(localStorage.getItem('watchedOffers')).length;
    }

    return 0;
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
