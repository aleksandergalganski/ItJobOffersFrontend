import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree>
    | UrlTree {
    return this.authService.isLoginSubject.pipe(
      take(1),
      map((isAuth) => {
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/login']);
      })
    );
  }
}