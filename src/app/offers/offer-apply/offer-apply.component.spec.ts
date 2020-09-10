import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferApplyComponent } from './offer-apply.component';

describe('OfferApplyComponent', () => {
  let component: OfferApplyComponent;
  let fixture: ComponentFixture<OfferApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
