import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { SnackBarService } from 'src/app/shared/snackbar.service';
import { Application } from '../application.model';
import { ApplicationsService } from '../applications.service';

@Component({
  selector: 'app-offer-apply',
  templateUrl: './offer-apply.component.html',
  styleUrls: ['./offer-apply.component.scss'],
})
export class OfferApplyComponent implements OnInit {
  @Input() offerId: string;
  applyForm: FormGroup;
  application: Application;

  constructor(
    private fb: FormBuilder,
    private applicationService: ApplicationsService,
    private snackBarService: SnackBarService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.applyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }

  onSubmit() {
    if (this.applyForm.valid) {
      const { email, message } = this.applyForm.value;
      this.application = { email, message, offer: this.offerId };
      this.applicationService
        .sendApplication(this.offerId, this.application)
        .subscribe(
          (res) => {
            this.showSuccessSnackBar();
          },
          (err) => {
            this.showErrorSnackBar(err.error.error);
          }
        );
    }
  }

  private showSuccessSnackBar() {
    this.translateService.get('APPLY.SUCCESS_MESSAGE').subscribe((text) => {
      this.snackBarService.showSnackBar(text, 'OK');
    });
  }

  private showErrorSnackBar(apiError: string) {
    let translateMessage = 'APPLY.ERROR_MESSAGE';
    if (apiError === 'Duplicated email error') {
      translateMessage = 'APPLY.EMAIL_ERROR';
    }
    this.translateService.get(translateMessage).subscribe((text) => {
      this.snackBarService.showSnackBar(text, 'OK');
    });
  }

  get email() {
    return this.applyForm.get('email');
  }
}
