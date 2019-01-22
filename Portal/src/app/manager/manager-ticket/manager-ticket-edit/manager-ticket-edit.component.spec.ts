import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTicketEditComponent } from './manager-ticket-edit.component';

describe('ManagerTicketEditComponent', () => {
  let component: ManagerTicketEditComponent;
  let fixture: ComponentFixture<ManagerTicketEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTicketEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTicketEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
