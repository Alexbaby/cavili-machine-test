import { TestBed } from '@angular/core/testing';

import { LogginGuardGuard } from './loggin-guard.guard';

describe('LogginGuardGuard', () => {
  let guard: LogginGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogginGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
