import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaterangeComponent } from './cdaterange.component';

describe('CdaterangeComponent', () => {
  let component: CdaterangeComponent;
  let fixture: ComponentFixture<CdaterangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdaterangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdaterangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
