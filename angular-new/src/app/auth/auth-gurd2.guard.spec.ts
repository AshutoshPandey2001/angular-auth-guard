import { TestBed } from '@angular/core/testing';

import { AuthGurd2Guard } from './auth-gurd2.guard';

describe('AuthGurd2Guard', () => {
  let guard: AuthGurd2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGurd2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
