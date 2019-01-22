import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileDetailsComponent } from './admin-profile-details.component';

describe('AdminProfileDetailsComponent', () => {
  let component: AdminProfileDetailsComponent;
  let fixture: ComponentFixture<AdminProfileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
