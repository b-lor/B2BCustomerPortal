import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaddTicketComponent } from './cadd-ticket.component';

describe('CaddTicketComponent', () => {
  let component: CaddTicketComponent;
  let fixture: ComponentFixture<CaddTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaddTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaddTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
