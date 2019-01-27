import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketDeleteComponent } from './admin-ticket-delete.component';

describe('AdminTicketDeleteComponent', () => {
  let component: AdminTicketDeleteComponent;
  let fixture: ComponentFixture<AdminTicketDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTicketDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTicketDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
