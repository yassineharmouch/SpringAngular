import { TestBed } from '@angular/core/testing';

import { AchateService } from './achate.service';

describe('AchateService', () => {
  let service: AchateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
