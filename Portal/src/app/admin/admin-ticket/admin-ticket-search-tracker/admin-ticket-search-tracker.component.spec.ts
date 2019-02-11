import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketSearchTrackerComponent } from './admin-ticket-search-tracker.component';

describe('AdminTicketSearchTrackerComponent', () => {
  let component: AdminTicketSearchTrackerComponent;
  let fixture: ComponentFixture<AdminTicketSearchTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketSearchTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketSearchTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
