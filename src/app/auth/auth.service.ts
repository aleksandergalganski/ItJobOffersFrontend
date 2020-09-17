import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { User } from './user.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient, private router: Router) {}

  private hasToken(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  login(email: string, password: string): Observable<any> {
    return this.httpClient
      .post(`${this.apiUrl}/api/v1/auth/login`, { email, password })
      .pipe(
        tap((res: { success: boolean; token: string }) => {
          localStorage.setItem('token', res.token);
          this.isLoginSubject.next(true);
        })
      );
  }

  register(userData: {
    name: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.httpClient.post(
      `${this.apiUrl}/api/v1/auth/register`,
      userData
    );
  }

  getMe(): Observable<User> {
    return this.httpClient
      .get(`${this.apiUrl}/api/v1/auth/whoami`)
      .pipe(map((res: { success: boolean; data: User }) => res.data));
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
