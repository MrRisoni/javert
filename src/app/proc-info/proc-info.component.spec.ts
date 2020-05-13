import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcInfoComponent } from './proc-info.component';

describe('ProcInfoComponent', () => {
  let component: ProcInfoComponent;
  let fixture: ComponentFixture<ProcInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
