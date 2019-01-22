import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerProfileEditComponent } from './manager-profile-edit.component';

describe('ManagerProfileEditComponent', () => {
  let component: ManagerProfileEditComponent;
  let fixture: ComponentFixture<ManagerProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
