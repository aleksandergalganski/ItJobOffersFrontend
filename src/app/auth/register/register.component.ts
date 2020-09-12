import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '../auth.service';
import { SnackBarService } from 'src/app/shared/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isLoading: boolean = false;
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private translateService: TranslateService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      if (!this.matchPasswords()) {
        console.log('Not Match');
        this.showPasswordErrorSnackBar();
      } else {
        this.isLoading = true;
        const { name, email, password } = this.registerForm.value;
        this.authService.register({ name, email, password }).subscribe(
          (data) => {
            this.isLoading = false;
            this.showSuccessRegisterSnackBar();
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 2000);
          },
          (error) => {
            this.showApiErrorSnackBar(error.error.error);
            this.isLoading = false;
          }
        );
      }
    }
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get password2() {
    return this.registerForm.get('password2');
  }

  private matchPasswords() {
    return this.password.value === this.password2.value;
  }

  private showPasswordErrorSnackBar() {
    this.translateService.get('REGISTER.PASSWORD_ERROR').subscribe((text) => {
      this.snackBarService.showSnackBar(text, 'OK');
    });
  }

  private showApiErrorSnackBar(apiErrorMessage: string) {
    if (apiErrorMessage === 'Duplicated field value entered') {
      this.translateService
        .get('REGISTER.DUPLICATE_MESSAGE')
        .subscribe((text) => {
          this.snackBarService.showSnackBar(text, 'OK');
        });
    }
  }

  private showSuccessRegisterSnackBar() {
    this.translateService.get('REGISTER.SUCCESS_MESSAGE').subscribe((text) => {
      this.snackBarService.showSnackBar(text, 'OK');
    });
  }
}
