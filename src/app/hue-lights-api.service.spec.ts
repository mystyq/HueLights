import { TestBed } from '@angular/core/testing';

import { HueLightsApiService } from './hue-lights-api.service';

describe('HueLightsApiService', () => {
  let service: HueLightsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HueLightsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
