import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerDayCustomerComponent } from './per-day-customer.component';

describe('PerDayCustomerComponent', () => {
  let component: PerDayCustomerComponent;
  let fixture: ComponentFixture<PerDayCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerDayCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerDayCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
