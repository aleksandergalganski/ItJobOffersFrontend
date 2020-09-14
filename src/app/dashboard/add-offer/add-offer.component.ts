import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Offer } from 'src/app/offers/offer.model';
import { OffersService } from 'src/app/offers/offers.service';
import { SnackBarService } from 'src/app/shared/snackbar.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss'],
})
export class AddOfferComponent implements OnInit {
  @Input() companyId: string;
  isLoading: boolean = false;
  expLevels = ['Intern', 'Junior', 'Mid', 'Senior'];
  offerForm: FormGroup;
  offer: Offer;

  constructor(
    private fb: FormBuilder,
    private offersService: OffersService,
    private snackBarService: SnackBarService,
    private translateService: TranslateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.onChanges();
    console.log(this.companyId);
  }

  onSubmit() {
    this.isLoading = true;
    if (this.offerForm.valid) {
      if (this.checkSalary()) {
        this.offer = this.offerForm.value;
        this.offersService.createOffer(this.companyId, this.offer).subscribe(
          (data) => {
            this.isLoading = false;
            this.showSuccessSnackBar();
            this.offerForm.reset();
          },
          (error) => {
            this.isLoading = false;
            this.snackBarService.showSnackBar(error.error.error, 'OK', 2000);
            this.offerForm.reset();
          }
        );
      }
    }
  }

  private onChanges() {
    this.isRemote.valueChanges.subscribe((value) => {
      if (value) {
        this.city.disable();
        this.postCode.disable();
        this.street.disable();
        this.number.disable();
      } else {
        this.city.enable();
        this.postCode.enable();
        this.street.enable();
        this.number.enable();
      }
    });
  }

  checkSalary() {
    if (this.minSalary.value >= this.maxSalary.value) {
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
      minSalary: ['', [Validators.required, Validators.min(0)]],
      maxSalary: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
      mustHave: ['', Validators.required],
      niceToHave: ['', Validators.required],
      isRemote: [false],
      city: [''],
      postCode: ['', Validators.pattern('^[0-9]{2}-[0-9]{3}$')],
      street: [''],
      number: [''],
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

  get minSalary() {
    return this.offerForm.get('minSalary');
  }

  get maxSalary() {
    return this.offerForm.get('maxSalary');
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

  get street() {
    return this.offerForm.get('street');
  }

  get number() {
    return this.offerForm.get('number');
  }
}
