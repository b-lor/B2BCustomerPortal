import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTransactionsComponent } from './c-transactions.component';

describe('CTransactionsComponent', () => {
  let component: CTransactionsComponent;
  let fixture: ComponentFixture<CTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
