import { TestBed } from '@angular/core/testing';

import { FeestructureService } from './feestructure.service';

describe('FeestructureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeestructureService = TestBed.get(FeestructureService);
    expect(service).toBeTruthy();
  });
});
