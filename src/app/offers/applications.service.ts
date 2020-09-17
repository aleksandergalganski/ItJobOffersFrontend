import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Application } from './application.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendApplication(offerId: string, application: Application): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/api/v1/offers/${offerId}/applications`,
      application
    );
  }
}
