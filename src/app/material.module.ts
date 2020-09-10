import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';

const materialModules = [
  MatProgressSpinnerModule,
  MatIconModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatBadgeModule,
  MatChipsModule,
  MatListModule,
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules],
})
export class MaterialModule {}
