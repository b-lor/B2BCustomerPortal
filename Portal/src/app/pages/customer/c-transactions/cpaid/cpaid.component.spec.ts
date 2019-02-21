import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaidComponent } from './cpaid.component';

describe('CpaidComponent', () => {
  let component: CpaidComponent;
  let fixture: ComponentFixture<CpaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
