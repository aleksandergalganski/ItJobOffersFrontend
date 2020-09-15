import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Company } from 'src/app/companies/company.model';

@Component({
  selector: 'app-delete-company-dialog',
  templateUrl: './delete-company-dialog.component.html',
  styleUrls: ['./delete-company-dialog.component.scss'],
})
export class DeleteCompanyDialogComponent implements OnInit {
  companyName: string = '';

  constructor(
    public dialogRef: MatDialogRef<DeleteCompanyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Company
  ) {
    this.companyName = data.name;
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
