import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransactionsInvoicesComponent } from './customer-transactions-invoices.component';

describe('CustomerTransactionsInvoicesComponent', () => {
  let component: CustomerTransactionsInvoicesComponent;
  let fixture: ComponentFixture<CustomerTransactionsInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTransactionsInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTransactionsInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
