import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdetailTicketComponent } from './edetail-ticket.component';

describe('EdetailTicketComponent', () => {
  let component: EdetailTicketComponent;
  let fixture: ComponentFixture<EdetailTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdetailTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdetailTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
