import { TestBed } from '@angular/core/testing';

import { SpeechRecognizationService } from './speech-recognization.service';

describe('SpeechRecognizationService', () => {
  let service: SpeechRecognizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechRecognizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
