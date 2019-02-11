import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketSearchIssueComponent } from './admin-ticket-search-issue.component';

describe('AdminTicketSearchIssueComponent', () => {
  let component: AdminTicketSearchIssueComponent;
  let fixture: ComponentFixture<AdminTicketSearchIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketSearchIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketSearchIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
