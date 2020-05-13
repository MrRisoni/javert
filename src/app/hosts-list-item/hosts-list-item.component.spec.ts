import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsListItemComponent } from './hosts-list-item.component';

describe('HostsListItemComponent', () => {
  let component: HostsListItemComponent;
  let fixture: ComponentFixture<HostsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
