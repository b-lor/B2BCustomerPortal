import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EclosedTicketComponent } from './eclosed-ticket.component';

describe('EclosedTicketComponent', () => {
  let component: EclosedTicketComponent;
  let fixture: ComponentFixture<EclosedTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EclosedTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EclosedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
