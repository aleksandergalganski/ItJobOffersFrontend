import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Company } from './company.model';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(private httpClient: HttpClient) {}

  getCompanyByUserId(userId: string): Observable<Company> {
    return this.httpClient
      .get(`http://localhost:5000/api/v1/companies/user/${userId}`)
      .pipe(map((res: { success: boolean; data: Company }) => res.data));
  }

  createCompany(userToken: string, company: Company): Observable<any> {
    return this.httpClient.post(
      'http://localhost:5000/api/v1/companies',
      company,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${userToken}`),
      }
    );
  }
}
