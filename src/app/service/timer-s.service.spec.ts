import { TestBed } from '@angular/core/testing';

import { TimerSService } from './timer-s.service';

describe('TimerSService', () => {
  let service: TimerSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
