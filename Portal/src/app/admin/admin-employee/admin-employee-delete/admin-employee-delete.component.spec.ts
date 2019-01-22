import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeDeleteComponent } from './admin-employee-delete.component';

describe('AdminEmployeeDeleteComponent', () => {
  let component: AdminEmployeeDeleteComponent;
  let fixture: ComponentFixture<AdminEmployeeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
