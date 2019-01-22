import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeAddComponent } from './admin-employee-add.component';

describe('AdminEmployeeAddComponent', () => {
  let component: AdminEmployeeAddComponent;
  let fixture: ComponentFixture<AdminEmployeeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
