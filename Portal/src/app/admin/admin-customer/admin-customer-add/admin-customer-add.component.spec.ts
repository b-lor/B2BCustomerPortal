import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerAddComponent } from './admin-customer-add.component';

describe('AdminCustomerAddComponent', () => {
  let component: AdminCustomerAddComponent;
  let fixture: ComponentFixture<AdminCustomerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCustomerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
