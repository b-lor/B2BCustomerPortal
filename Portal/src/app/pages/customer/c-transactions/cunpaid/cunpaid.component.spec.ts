import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CunpaidComponent } from './cunpaid.component';

describe('CunpaidComponent', () => {
  let component: CunpaidComponent;
  let fixture: ComponentFixture<CunpaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CunpaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CunpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
