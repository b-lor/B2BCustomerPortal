import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerProfileDetailsComponent } from './manager-profile-details.component';

describe('ManagerProfileDetailsComponent', () => {
  let component: ManagerProfileDetailsComponent;
  let fixture: ComponentFixture<ManagerProfileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerProfileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
