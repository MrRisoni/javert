import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryElemComponent } from './summary-elem.component';

describe('SummaryElemComponent', () => {
  let component: SummaryElemComponent;
  let fixture: ComponentFixture<SummaryElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
