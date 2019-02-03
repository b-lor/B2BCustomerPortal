import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketMyticketComponent } from './admin-ticket-myticket.component';

describe('AdminTicketMyticketComponent', () => {
  let component: AdminTicketMyticketComponent;
  let fixture: ComponentFixture<AdminTicketMyticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketMyticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketMyticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
