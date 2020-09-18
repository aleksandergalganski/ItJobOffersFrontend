import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Company } from './company.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getCompanyByUserId(userId: string): Observable<Company> {
    return this.httpClient
      .get(`${this.apiUrl}/api/v1/companies/user/${userId}`)
      .pipe(map((res: { success: boolean; data: Company }) => res.data));
  }

  getAllComapnies(): Observable<Company[]> {
    return this.httpClient
      .get(`${this.apiUrl}/api/v1/companies`)
      .pipe(map((res: { success: boolean; data: Company[] }) => res.data));
  }

  getCompanyBySlug(slug: string): Observable<Company> {
    return this.httpClient
      .get(`${this.apiUrl}/api/v1/companies/`, {
        params: new HttpParams().set('slug', slug),
      })
      .pipe(map((res: { succes: boolean; data: Company[] }) => res.data[0]));
  }

  getCompanyById(id: string): Observable<Company> {
    return this.httpClient
      .get(`${this.apiUrl}/api/v1/companies/${id}`)
      .pipe(map((res: { success: boolean; data: Company }) => res.data));
  }

  getCompaniesByCity(city: string): Observable<Company[]> {
    return this.httpClient
      .get(`${this.apiUrl}/api/v1/companies`, {
        params: new HttpParams().set('city', city),
      })
      .pipe(map((res: { success: boolean; data: Company[] }) => res.data));
  }

  createCompany(userToken: string, company: Company): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/api/v1/companies`, company, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${userToken}`),
    });
  }

  deleteCompany(id: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/api/v1/companies/${id}`);
  }

  updateCompany(id: string, company: Company): Observable<any> {
    return this.httpClient.put(
      `${this.apiUrl}/api/v1/companies/${id}`,
      company
    );
  }

  uploadLogo(companyId: string, formData: FormData): Observable<any> {
    return this.httpClient.put(
      `${this.apiUrl}/api/v1/companies/${companyId}/logo`,
      formData
    );
  }
}
