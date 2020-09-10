import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedOffersComponent } from './watched-offers.component';

describe('WatchedOffersComponent', () => {
  let component: WatchedOffersComponent;
  let fixture: ComponentFixture<WatchedOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchedOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchedOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
