import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mobileMenuSelected: boolean = false;
  @ViewChild('menu', { static: true }) menu: ElementRef;
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}

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
}
