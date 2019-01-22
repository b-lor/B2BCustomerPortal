import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTicketDetailsComponent } from './employee-ticket-details.component';

describe('EmployeeTicketDetailsComponent', () => {
  let component: EmployeeTicketDetailsComponent;
  let fixture: ComponentFixture<EmployeeTicketDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTicketDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
