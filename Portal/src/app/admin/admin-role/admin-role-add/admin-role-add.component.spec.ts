import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoleAddComponent } from './admin-role-add.component';

describe('AdminRoleAddComponent', () => {
  let component: AdminRoleAddComponent;
  let fixture: ComponentFixture<AdminRoleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRoleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
