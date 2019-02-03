import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketAssignedComponent } from './admin-ticket-assigned.component';

describe('AdminTicketAssignedComponent', () => {
  let component: AdminTicketAssignedComponent;
  let fixture: ComponentFixture<AdminTicketAssignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketAssignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
