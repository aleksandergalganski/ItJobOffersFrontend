import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyItemComponent } from './company-item/company-item.component';

const routes: Routes = [
  { path: '', component: CompaniesListComponent },
  { path: ':slug', component: CompanyItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {}
