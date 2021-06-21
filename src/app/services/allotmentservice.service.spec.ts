import { TestBed } from '@angular/core/testing';

import { AllotmentserviceService } from './allotmentservice.service';

describe('AllotmentserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllotmentserviceService = TestBed.get(AllotmentserviceService);
    expect(service).toBeTruthy();
  });
});
