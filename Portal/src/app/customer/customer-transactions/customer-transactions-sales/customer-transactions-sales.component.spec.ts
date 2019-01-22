import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransactionsSalesComponent } from './customer-transactions-sales.component';

describe('CustomerTransactionsSalesComponent', () => {
  let component: CustomerTransactionsSalesComponent;
  let fixture: ComponentFixture<CustomerTransactionsSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTransactionsSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTransactionsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
