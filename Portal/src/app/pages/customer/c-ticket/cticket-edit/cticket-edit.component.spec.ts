import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CticketEditComponent } from './cticket-edit.component';

describe('CticketEditComponent', () => {
  let component: CticketEditComponent;
  let fixture: ComponentFixture<CticketEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CticketEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CticketEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
