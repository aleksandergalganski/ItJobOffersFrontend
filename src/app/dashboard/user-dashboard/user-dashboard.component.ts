import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';
import { Company } from '../../companies/company.model';
import { CompaniesService } from '../../companies/companies.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  isLoading: boolean = true;
  user: User;
  company: Company;

  constructor(
    private authService: AuthService,
    private companiesService: CompaniesService
  ) {}

  ngOnInit(): void {
    this.authService.getMe().subscribe((user: User) => {
      this.user = user;

      this.companiesService
        .getCompanyByUserId(this.user._id)
        .subscribe((company: Company) => {
          this.company = company;
          this.isLoading = false;
        });
    });
  }
}
