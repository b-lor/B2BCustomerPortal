import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketSearchTicketDateRangeComponent } from './admin-ticket-search-ticket-date-range.component';

describe('AdminTicketSearchTicketDateRangeComponent', () => {
  let component: AdminTicketSearchTicketDateRangeComponent;
  let fixture: ComponentFixture<AdminTicketSearchTicketDateRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketSearchTicketDateRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketSearchTicketDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
