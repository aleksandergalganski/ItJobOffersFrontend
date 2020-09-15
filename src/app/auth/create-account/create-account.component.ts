import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  smallScreen: boolean;
  registerDone: boolean = false;
  @ViewChild('stepperVertical', { static: false }) verticalStepper: MatStepper;
  @ViewChild('stepperHorizontal', { static: false })
  horizontalStepper: MatStepper;
  @ViewChild('horizontalStep', { static: false }) horizontalStep: MatStep;
  @ViewChild('verticalStep', { static: false }) verticalStep: MatStep;

  constructor(
    private breakPointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breakPointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.smallScreen = result.matches;
      });
  }

  onCreationDone() {
    this.router.navigate(['/login']);
  }

  onRegisterDone() {
    this.markAsCompleted();
    this.next();
  }

  private markAsCompleted() {
    if (this.smallScreen) {
      this.verticalStep.completed = true;
    } else {
      this.horizontalStep.completed = true;
    }
  }

  private next() {
    if (this.smallScreen) {
      this.verticalStepper.next();
    } else {
      this.horizontalStepper.next();
    }
  }
}
