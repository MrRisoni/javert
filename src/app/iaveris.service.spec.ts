import { TestBed } from '@angular/core/testing';

import { IaverisService } from './iaveris.service';

describe('IaverisService', () => {
  let service: IaverisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaverisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
