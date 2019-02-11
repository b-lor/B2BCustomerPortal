import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketSearchPriorityComponent } from './admin-ticket-search-priority.component';

describe('AdminTicketSearchPriorityComponent', () => {
  let component: AdminTicketSearchPriorityComponent;
  let fixture: ComponentFixture<AdminTicketSearchPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketSearchPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketSearchPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
