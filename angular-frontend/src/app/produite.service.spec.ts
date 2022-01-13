import { TestBed } from '@angular/core/testing';

import { ProduiteService } from './produite.service';

describe('ProduiteService', () => {
  let service: ProduiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
