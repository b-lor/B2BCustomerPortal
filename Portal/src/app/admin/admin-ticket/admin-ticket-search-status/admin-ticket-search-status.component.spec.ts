import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketSearchStatusComponent } from './admin-ticket-search-status.component';

describe('AdminTicketSearchStatusComponent', () => {
  let component: AdminTicketSearchStatusComponent;
  let fixture: ComponentFixture<AdminTicketSearchStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketSearchStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketSearchStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
