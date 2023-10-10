import { TestBed } from '@angular/core/testing';

import { FraudDetectionServiceService } from './fraud-detection-service.service';

describe('FraudDetectionServiceService', () => {
  let service: FraudDetectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraudDetectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
