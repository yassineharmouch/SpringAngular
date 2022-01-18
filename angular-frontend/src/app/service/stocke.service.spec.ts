import { TestBed } from '@angular/core/testing';

import { StockeService } from './stocke.service';

describe('StockeService', () => {
  let service: StockeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
