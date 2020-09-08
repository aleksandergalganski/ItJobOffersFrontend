import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialModules = [MatProgressSpinnerModule];

@NgModule({
  imports: [materialModules],
  exports: [materialModules],
})
export class MaterialModule {}
