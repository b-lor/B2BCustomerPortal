import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTicketAddComponent } from './employee-ticket-add.component';

describe('EmployeeTicketAddComponent', () => {
  let component: EmployeeTicketAddComponent;
  let fixture: ComponentFixture<EmployeeTicketAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTicketAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTicketAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
