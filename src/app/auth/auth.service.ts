import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private httpClient: HttpClient, private router: Router) {}

  private hasToken(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  login(email: string, password: string): Observable<any> {
    return this.httpClient
      .post('http://localhost:5000/api/v1/auth/login', { email, password })
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
      'http://localhost:5000/api/v1/auth/register',
      userData
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }
}
