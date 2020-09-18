import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectOptionsService } from 'src/app/shared/select-options.service';
import { CompaniesService } from '../../companies/companies.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss'],
})
export class CreateCompanyComponent implements OnInit {
  companyForm: FormGroup;
  isLoading: boolean = false;
  technologies: string[] = [];
  @Output() creationDone = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private companiesService: CompaniesService,
    private selectOptionService: SelectOptionsService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.setSelect();
  }

  setSelect() {
    this.technologies = this.selectOptionService.mustHave;
  }

  onSubmit() {
    if (this.companyForm.valid) {
      this.isLoading = true;
      const token = localStorage.getItem('temporaryToken');
      this.companiesService
        .createCompany(token, this.companyForm.value)
        .subscribe((res) => {
          this.isLoading = false;
          localStorage.removeItem('temporaryToken');
          this.creationDone.emit();
        });
    }
  }

  private createForm() {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required],
      foundedIn: ['', Validators.required],
      technologies: ['', Validators.required],
      companySize: ['', [Validators.required, Validators.min(0)]],
      city: ['', Validators.required],
      postCode: ['', Validators.required],
      street: ['', Validators.required],
      streetNumber: ['', Validators.required],
      website: ['', Validators.required],
      facebookLink: [''],
      linkedinLink: [''],
      instagramLink: [''],
    });
  }
}
