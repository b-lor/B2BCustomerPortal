import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketOverdueComponent } from './admin-ticket-overdue.component';

describe('AdminTicketOverdueComponent', () => {
  let component: AdminTicketOverdueComponent;
  let fixture: ComponentFixture<AdminTicketOverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketOverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
