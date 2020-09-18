import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateCompanyComponent,
    CreateAccountComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [AuthRoutingModule, RouterModule, SharedModule],
})
export class AuthModule {}
