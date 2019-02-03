import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserTransactionComponent } from './admin-user-transaction.component';

describe('AdminUserTransactionComponent', () => {
  let component: AdminUserTransactionComponent;
  let fixture: ComponentFixture<AdminUserTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
