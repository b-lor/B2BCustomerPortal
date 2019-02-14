import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketClosedComponent } from './admin-ticket-closed.component';

describe('AdminTicketClosedComponent', () => {
  let component: AdminTicketClosedComponent;
  let fixture: ComponentFixture<AdminTicketClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
