import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CclosedComponent } from './cclosed.component';

describe('CclosedComponent', () => {
  let component: CclosedComponent;
  let fixture: ComponentFixture<CclosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CclosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CclosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
