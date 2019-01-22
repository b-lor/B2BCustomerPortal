import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerDeleteComponent } from './admin-customer-delete.component';

describe('AdminCustomerDeleteComponent', () => {
  let component: AdminCustomerDeleteComponent;
  let fixture: ComponentFixture<AdminCustomerDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCustomerDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
