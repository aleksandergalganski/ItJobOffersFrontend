import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

import { Offer } from 'src/app/offers/offer.model';
import { OffersService } from 'src/app/offers/offers.service';
import { SnackBarService } from 'src/app/shared/snackbar.service';
import { DeleteOfferDialogComponent } from '../delete-offer-dialog/delete-offer-dialog.component';
import { UpdateOfferDialogComponent } from '../update-offer-dialog/update-offer-dialog.component';

@Component({
  selector: 'app-company-offer-item',
  templateUrl: './company-offer-item.component.html',
  styleUrls: ['./company-offer-item.component.scss'],
})
export class CompanyOfferItemComponent implements OnInit {
  @Input() offer: Offer;
  @Output() offerDeleted = new EventEmitter<string>();
  @Output() offerUpdated = new EventEmitter<void>();

  constructor(
    private dialog: MatDialog,
    private offersService: OffersService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {}

  onOpenDeleteDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { name: this.offer.name };
    const dialogRef = this.dialog.open(
      DeleteOfferDialogComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.offersService.deleteOffer(this.offer._id).subscribe((result) => {
          this.snackBarService.showSnackBar('Offer Deleted', 'OK', 2000);
          this.offerDeleted.emit(this.offer._id);
        });
      }
    });
  }

  onOpenUpdateDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { ...this.offer };
    dialogConfig.width = '600px';
    const dialogRef = this.dialog.open(
      UpdateOfferDialogComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((result: Offer) => {
      if (result) {
        this.offersService
          .updateOffer(this.offer._id, result)
          .subscribe((response) => {
            this.snackBarService.showSnackBar('Offer Updated', 'OK', 2000);
            this.offerUpdated.emit();
          });
      }
    });
  }
}
