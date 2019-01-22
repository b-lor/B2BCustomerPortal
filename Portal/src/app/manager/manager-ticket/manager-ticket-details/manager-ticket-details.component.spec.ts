import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTicketDetailsComponent } from './manager-ticket-details.component';

describe('ManagerTicketDetailsComponent', () => {
  let component: ManagerTicketDetailsComponent;
  let fixture: ComponentFixture<ManagerTicketDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTicketDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
