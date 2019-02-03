import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketInboxComponent } from './admin-ticket-inbox.component';

describe('AdminTicketInboxComponent', () => {
  let component: AdminTicketInboxComponent;
  let fixture: ComponentFixture<AdminTicketInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
