import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CompaniesListComponent, CompanyItemComponent],
  imports: [RouterModule, CompaniesRoutingModule, SharedModule],
})
export class CompaniesModule {}
