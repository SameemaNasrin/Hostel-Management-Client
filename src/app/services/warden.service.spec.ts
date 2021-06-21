import { TestBed } from '@angular/core/testing';

import { WardenService } from './warden.service';

describe('WardenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WardenService = TestBed.get(WardenService);
    expect(service).toBeTruthy();
  });
});
