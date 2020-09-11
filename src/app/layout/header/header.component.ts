import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { OffersService } from 'src/app/offers/offers.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  mobileMenuSelected: boolean = false;
  watchedfOffersLenSubscribption: Subscription;
  isAuth: boolean = false;
  authSubscription: Subscription;
  watchedfOffersLen: number = 0;
  @ViewChild('menu', { static: true }) menu: ElementRef;
  constructor(
    private translateService: TranslateService,
    private offersService: OffersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.watchedfOffersLenSubscribption = this.offersService.watchedOffersLengthChanged.subscribe(
      (offersLen) => {
        this.watchedfOffersLen = offersLen;
      }
    );
    this.authSubscription = this.authService.isLoginSubject.subscribe(
      (isAuth) => {
        this.isAuth = isAuth;
      }
    );
  }

  onSwitchLanguage(language: string) {
    this.translateService.use(language);
  }

  onToggleMenu() {
    if (this.mobileMenuSelected) {
      this.menu.nativeElement.style.display = 'none';
      this.menu.nativeElement.style.transform = 'translateX(100%)';
      document.querySelector('body').style.overflowY = 'visible';
    } else {
      this.menu.nativeElement.style.display = 'flex';
      this.menu.nativeElement.style.transform = 'translateX(0)';
      document.querySelector('body').style.overflowY = 'hidden';
    }
    this.mobileMenuSelected = !this.mobileMenuSelected;
  }

  onHideMenu() {
    if (this.mobileMenuSelected) {
      this.mobileMenuSelected = !this.mobileMenuSelected;
      this.menu.nativeElement.style.display = 'none';
      this.menu.nativeElement.style.transform = 'translateX(100%)';
      document.querySelector('body').style.overflowY = 'visible';
    }
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    if (this.watchedfOffersLenSubscribption) {
      this.watchedfOffersLenSubscribption.unsubscribe();
    }

    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
