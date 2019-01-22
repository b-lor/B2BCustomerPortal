import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTicketEditComponent } from './customer-ticket-edit.component';

describe('CustomerTicketEditComponent', () => {
  let component: CustomerTicketEditComponent;
  let fixture: ComponentFixture<CustomerTicketEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTicketEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTicketEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
