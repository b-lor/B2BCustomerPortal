import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTicketComponent } from './c-ticket.component';

describe('CTicketComponent', () => {
  let component: CTicketComponent;
  let fixture: ComponentFixture<CTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
