import { TestBed, async, inject } from '@angular/core/testing';

import { WardenGuard } from './warden.guard';

describe('WardenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WardenGuard]
    });
  });

  it('should ...', inject([WardenGuard], (guard: WardenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
