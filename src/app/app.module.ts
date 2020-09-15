import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { OffersListComponent } from './offers/offers-list/offers-list.component';
import { OfferItemComponent } from './offers/offer-item/offer-item.component';
import { MaterialModule } from './material.module';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { CompanyItemComponent } from './companies/company-item/company-item.component';
import { AddOfferComponent } from './dashboard/add-offer/add-offer.component';
import { OfferApplyComponent } from './offers/offer-apply/offer-apply.component';
import { WatchedOffersComponent } from './offers/watched-offers/watched-offers.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { SimilarOffersComponent } from './offers/similar-offers/similar-offers.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { CompanyOffersComponent } from './dashboard/company-offers/company-offers.component';
import { EditCompanyDetailsComponent } from './dashboard/edit-company-details/edit-company-details.component';
import { CompanyOfferItemComponent } from './dashboard/company-offer-item/company-offer-item.component';
import { DeleteOfferDialogComponent } from './dashboard/delete-offer-dialog/delete-offer-dialog.component';
import { UpdateOfferDialogComponent } from './dashboard/update-offer-dialog/update-offer-dialog.component';
import { CreateCompanyComponent } from './companies/create-company/create-company.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    OffersListComponent,
    OfferItemComponent,
    CompaniesListComponent,
    CompanyItemComponent,
    AddOfferComponent,
    OfferApplyComponent,
    WatchedOffersComponent,
    UserDashboardComponent,
    SimilarOffersComponent,
    CompanyOffersComponent,
    EditCompanyDetailsComponent,
    CompanyOfferItemComponent,
    DeleteOfferDialogComponent,
    UpdateOfferDialogComponent,
    CreateCompanyComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [DeleteOfferDialogComponent, UpdateOfferDialogComponent],
})
export class AppModule {}

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
