import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CticketDetailComponent } from './cticket-detail.component';

describe('CticketDetailComponent', () => {
  let component: CticketDetailComponent;
  let fixture: ComponentFixture<CticketDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CticketDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CticketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
