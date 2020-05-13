import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtrfsComponent } from './btrfs.component';

describe('BtrfsComponent', () => {
  let component: BtrfsComponent;
  let fixture: ComponentFixture<BtrfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtrfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtrfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
