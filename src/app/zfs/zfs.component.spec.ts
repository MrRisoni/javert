import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZFSComponent } from './zfs.component';

describe('ZFSComponent', () => {
  let component: ZFSComponent;
  let fixture: ComponentFixture<ZFSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZFSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZFSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
