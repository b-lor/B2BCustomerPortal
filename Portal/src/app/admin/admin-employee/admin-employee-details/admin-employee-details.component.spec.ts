import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeDetailsComponent } from './admin-employee-details.component';

describe('AdminEmployeeDetailsComponent', () => {
  let component: AdminEmployeeDetailsComponent;
  let fixture: ComponentFixture<AdminEmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
