import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FileValidator } from 'ngx-material-file-input';

@Component({
  selector: 'app-upload-logo-dialog',
  templateUrl: './upload-logo-dialog.component.html',
  styleUrls: ['./upload-logo-dialog.component.scss'],
})
export class UploadLogoDialogComponent implements OnInit {
  logoForm: FormGroup;
  readonly maxFileSize = 1048576;

  constructor(
    private dialogRef: MatDialogRef<UploadLogoDialogComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.logoForm = this.fb.group({
      file: [
        undefined,
        [Validators.required, FileValidator.maxContentSize(this.maxFileSize)],
      ],
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    if (this.logoForm.valid) {
      this.dialogRef.close(<File>this.logoForm.value.file.files[0]);
    }
  }
}
