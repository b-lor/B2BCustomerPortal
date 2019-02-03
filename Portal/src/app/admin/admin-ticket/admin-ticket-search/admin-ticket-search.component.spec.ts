import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketSearchComponent } from './admin-ticket-search.component';

describe('AdminTicketSearchComponent', () => {
  let component: AdminTicketSearchComponent;
  let fixture: ComponentFixture<AdminTicketSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
