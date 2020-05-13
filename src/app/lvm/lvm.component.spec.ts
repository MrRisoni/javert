import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LVMComponent } from './lvm.component';

describe('LVMComponent', () => {
  let component: LVMComponent;
  let fixture: ComponentFixture<LVMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LVMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LVMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
