import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Application } from './application.model';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  constructor(private http: HttpClient) {}

  sendApplication(application: Application): Observable<any> {
    return this.http.post(
      'http://localhost:5000/api/v1/applications',
      application
    );
  }
}
