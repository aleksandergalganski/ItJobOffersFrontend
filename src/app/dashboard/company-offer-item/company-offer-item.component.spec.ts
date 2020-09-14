import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOfferItemComponent } from './company-offer-item.component';

describe('CompanyOfferItemComponent', () => {
  let component: CompanyOfferItemComponent;
  let fixture: ComponentFixture<CompanyOfferItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyOfferItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOfferItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
