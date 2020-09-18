import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DeleteOfferDialogComponent } from './delete-offer-dialog/delete-offer-dialog.component';
import { UpdateOfferDialogComponent } from './update-offer-dialog/update-offer-dialog.component';
import { DeleteCompanyDialogComponent } from './delete-company-dialog/delete-company-dialog.component';
import { EditCompanyDialogComponent } from './edit-company-dialog/edit-company-dialog.component';
import { UploadLogoDialogComponent } from './upload-logo-dialog/upload-logo-dialog.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CompanyOffersComponent } from './company-offers/company-offers.component';
import { CompanyOfferItemComponent } from './company-offer-item/company-offer-item.component';
import { EditCompanyDetailsComponent } from './edit-company-details/edit-company-details.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  declarations: [
    AddOfferComponent,
    UserDashboardComponent,
    CompanyOffersComponent,
    EditCompanyDetailsComponent,
    CompanyOfferItemComponent,
    DeleteOfferDialogComponent,
    UpdateOfferDialogComponent,
    DeleteCompanyDialogComponent,
    EditCompanyDialogComponent,
    UploadLogoDialogComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UserDashboardComponent,
        canActivate: [AuthGuard],
      },
    ]),
    SharedModule,
  ],
  entryComponents: [
    DeleteOfferDialogComponent,
    UpdateOfferDialogComponent,
    DeleteCompanyDialogComponent,
    EditCompanyDialogComponent,
    UploadLogoDialogComponent,
  ],
})
export class DashboardModule {}
