import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (data) => {
          this.isLoading = false;
          console.log(data);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          this.showErrorSnackBar();
          this.isLoading = false;
        }
      );
    } else {
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  showErrorSnackBar() {
    this.translateService
      .get(['LOGIN.INVALID_CREDENTIALS', 'LOGIN.TRY_AGAIN'])
      .subscribe((results) => {
        this.snackBar.open(
          results['LOGIN.INVALID_CREDENTIALS'],
          results['LOGIN.TRY_AGAIN'],
          {
            duration: 2000,
          }
        );
      });
  }
}
