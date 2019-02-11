import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketSearchTicketComponent } from './admin-ticket-search-ticket.component';

describe('AdminTicketSearchTicketComponent', () => {
  let component: AdminTicketSearchTicketComponent;
  let fixture: ComponentFixture<AdminTicketSearchTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketSearchTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketSearchTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
