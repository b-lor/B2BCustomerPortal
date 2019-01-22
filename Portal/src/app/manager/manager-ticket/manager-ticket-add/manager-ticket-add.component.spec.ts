import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTicketAddComponent } from './manager-ticket-add.component';

describe('ManagerTicketAddComponent', () => {
  let component: ManagerTicketAddComponent;
  let fixture: ComponentFixture<ManagerTicketAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTicketAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTicketAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
