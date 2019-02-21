import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsalesComponent } from './csales.component';

describe('CsalesComponent', () => {
  let component: CsalesComponent;
  let fixture: ComponentFixture<CsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
