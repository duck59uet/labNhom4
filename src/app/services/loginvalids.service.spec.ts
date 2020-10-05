import { TestBed } from '@angular/core/testing';

import { LoginvalidsService } from './loginvalids.service';

describe('LoginvalidsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginvalidsService = TestBed.get(LoginvalidsService);
    expect(service).toBeTruthy();
  });
});
