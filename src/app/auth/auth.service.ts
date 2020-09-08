import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private httpClient: HttpClient) {}

  private hasToken(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  login(email: string, password: string) {
    this.httpClient.post('api/v1/auth/login', { email, password }).subscribe(
      (res: { success: boolean; token: string }) => {
        localStorage.setItem('token', res.token);
        this.isLoginSubject.next(true);
      },
      (err) => {
        this.isLoginSubject.next(false);
      }
    );
  }

  register(user: User) {
    this.httpClient.post('api/v1/auth/register', user).subscribe(
      (res: { success: boolean; token: string }) => {
        localStorage.setItem('token', res.token);
        this.isLoginSubject.next(true);
      },
      (err) => {
        this.isLoginSubject.next(false);
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }
}
