import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketUnassignedComponent } from './admin-ticket-unassigned.component';

describe('AdminTicketUnassignedComponent', () => {
  let component: AdminTicketUnassignedComponent;
  let fixture: ComponentFixture<AdminTicketUnassignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketUnassignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketUnassignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
