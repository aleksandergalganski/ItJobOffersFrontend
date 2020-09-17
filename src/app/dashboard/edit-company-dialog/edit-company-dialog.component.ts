import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompaniesService } from 'src/app/companies/companies.service';
import { Company } from 'src/app/companies/company.model';
import { SelectOptionsService } from 'src/app/shared/select-options.service';
import { EditCompanyDetailsComponent } from '../edit-company-details/edit-company-details.component';

@Component({
  selector: 'app-edit-company-dialog',
  templateUrl: './edit-company-dialog.component.html',
  styleUrls: ['./edit-company-dialog.component.scss'],
})
export class EditCompanyDialogComponent implements OnInit {
  companyForm: FormGroup;
  company: Company;
  technologies: string[] = [];

  constructor(
    private fb: FormBuilder,
    private selectOptionService: SelectOptionsService,
    private dialogRef: MatDialogRef<EditCompanyDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Company
  ) {
    this.company = data;
  }

  ngOnInit(): void {
    this.createForm();
    this.setSelect();
    this.deleteCompanyFields();
    this.companyForm.setValue(this.company);
  }

  private deleteCompanyFields() {
    delete this.company._id;
    delete this.company.__v;
    delete this.company.slug;
    delete this.company.logo;
    delete this.company.user;
    delete this.company.createdAt;
  }

  setSelect() {
    this.technologies = this.selectOptionService.mustHave;
  }

  onSave() {
    if (this.companyForm.valid) {
      this.dialogRef.close(this.companyForm.value);
    }
  }

  onClose() {
    this.dialogRef.close();
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
