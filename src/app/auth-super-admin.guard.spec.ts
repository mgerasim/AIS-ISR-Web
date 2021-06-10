import { TestBed } from '@angular/core/testing';

import { AuthSuperAdminGuard } from './auth-super-admin.guard';

describe('AuthSuperAdminGuard', () => {
  let guard: AuthSuperAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthSuperAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
