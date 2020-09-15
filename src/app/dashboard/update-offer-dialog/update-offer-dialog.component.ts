import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

import { Offer } from 'src/app/offers/offer.model';
import { SnackBarService } from 'src/app/shared/snackbar.service';
import { SelectOptionsService } from '../../shared/select-options.service';

@Component({
  selector: 'app-update-offer-dialog',
  templateUrl: './update-offer-dialog.component.html',
  styleUrls: ['./update-offer-dialog.component.scss'],
})
export class UpdateOfferDialogComponent implements OnInit {
  expLevels = [];
  mustHaves = [];
  niceToHaves = [];
  categories = [];
  offerForm: FormGroup;
  offer: Offer;

  constructor(
    private fb: FormBuilder,
    private snackBarService: SnackBarService,
    private translateService: TranslateService,
    private selectOptionsService: SelectOptionsService,
    private dialogRef: MatDialogRef<UpdateOfferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: Offer
  ) {
    this.offer = data;
  }

  ngOnInit(): void {
    this.createForm();
    this.setSelects();
    delete this.offer._id;
    delete this.offer.__v;
    delete this.offer.slug;
    delete this.offer.createdAt;
    delete this.offer.company;
    this.offerForm.setValue(this.offer);
    this.onChanges();
  }

  setSelects() {
    this.expLevels = this.selectOptionsService.experienceLevels;
    this.niceToHaves = this.selectOptionsService.niceToHave;
    this.mustHaves = this.selectOptionsService.mustHave;
    this.categories = this.selectOptionsService.category;
  }

  onSave() {
    if (this.offerForm.valid) {
      if (this.checkSalary()) {
        this.dialogRef.close(this.offerForm.value);
      }
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  private onChanges() {
    this.isRemote.valueChanges.subscribe((value) => {
      if (value) {
        this.city.disable();
        this.postCode.disable();
        this.streetNumber.disable();
        this.number.disable();
      } else {
        this.city.enable();
        this.postCode.enable();
        this.streetNumber.enable();
        this.number.enable();
      }
    });
  }

  checkSalary() {
    if (this.salaryMin.value >= this.salaryMax.value) {
      this.snackBarService.showSnackBar('Salary error', 'OK', 2000);
      return false;
    }
    return true;
  }

  private createForm() {
    this.offerForm = this.fb.group({
      name: ['', Validators.required],
      experienceLevel: ['', Validators.required],
      category: ['', Validators.required],
      salaryMin: ['', [Validators.required, Validators.min(0)]],
      salaryMax: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
      mustHave: ['', Validators.required],
      niceToHave: ['', Validators.required],
      isRemote: [''],
      city: [''],
      postCode: ['', Validators.pattern('^[0-9]{2}-[0-9]{3}$')],
      street: [''],
      streetNumber: [''],
    });
  }

  private showSuccessSnackBar() {
    this.translateService.get('ADD_OFFER.SUCCESS_MESSAGE').subscribe((text) => {
      this.snackBarService.showSnackBar(text, 'OK');
    });
  }

  get name() {
    return this.offerForm.get('name');
  }

  get experienceLevel() {
    return this.offerForm.get('experienceLevel');
  }

  get category() {
    return this.offerForm.get('category');
  }

  get salaryMin() {
    return this.offerForm.get('salaryMin');
  }

  get salaryMax() {
    return this.offerForm.get('salaryMax');
  }

  get description() {
    return this.offerForm.get('description');
  }

  get mustHave() {
    return this.offerForm.get('mustHave');
  }

  get niceToHave() {
    return this.offerForm.get('niceToHave');
  }

  get isRemote() {
    return this.offerForm.get('isRemote');
  }

  get city() {
    return this.offerForm.get('city');
  }

  get postCode() {
    return this.offerForm.get('postCode');
  }

  get streetNumber() {
    return this.offerForm.get('streetNumber');
  }

  get number() {
    return this.offerForm.get('number');
  }
}
