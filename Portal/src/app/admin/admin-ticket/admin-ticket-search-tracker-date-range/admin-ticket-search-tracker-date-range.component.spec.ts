import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketSearchTrackerDateRangeComponent } from './admin-ticket-search-tracker-date-range.component';

describe('AdminTicketSearchTrackerDateRangeComponent', () => {
  let component: AdminTicketSearchTrackerDateRangeComponent;
  let fixture: ComponentFixture<AdminTicketSearchTrackerDateRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketSearchTrackerDateRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketSearchTrackerDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
