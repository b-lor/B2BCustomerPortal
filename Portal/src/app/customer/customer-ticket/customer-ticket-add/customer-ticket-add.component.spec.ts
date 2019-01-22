import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTicketAddComponent } from './customer-ticket-add.component';

describe('CustomerTicketAddComponent', () => {
  let component: CustomerTicketAddComponent;
  let fixture: ComponentFixture<CustomerTicketAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTicketAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTicketAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
