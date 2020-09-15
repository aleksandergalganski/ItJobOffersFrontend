import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompaniesService } from 'src/app/companies/companies.service';
import { Company } from 'src/app/companies/company.model';
import { SnackBarService } from 'src/app/shared/snackbar.service';
import { DeleteCompanyDialogComponent } from '../delete-company-dialog/delete-company-dialog.component';
import { EditCompanyDialogComponent } from '../edit-company-dialog/edit-company-dialog.component';

@Component({
  selector: 'app-edit-company-details',
  templateUrl: './edit-company-details.component.html',
  styleUrls: ['./edit-company-details.component.scss'],
})
export class EditCompanyDetailsComponent implements OnInit {
  @Input() company: Company;
  isLoading: boolean = false;

  constructor(
    private dialog: MatDialog,
    private companiesService: CompaniesService,
    private snackBarService: SnackBarService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onOpenDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteCompanyDialogComponent, {
      disableClose: true,
      autoFocus: true,
      data: this.company,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.companiesService
          .deleteCompany(this.company._id)
          .subscribe((result) => {
            this.snackBarService.showSnackBar('Company Delete', 'OK', 2000);
            this.router.navigate(['/offers']);
          });
      }
    });
  }

  onOpenUpdateDialog() {
    const dialogRef = this.dialog.open(EditCompanyDialogComponent, {
      disableClose: true,
      autoFocus: true,
      data: { ...this.company },
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.isLoading = true;
        this.companiesService
          .updateCompany(this.company._id, result)
          .subscribe((result) => {
            this.isLoading = false;
            this.snackBarService.showSnackBar('Company Updated', 'OK', 2000);
          });
      }
    });
  }

  onOpenUploadDialog() {}
}
