import { TestBed } from '@angular/core/testing';

import { VenteeService } from './ventee.service';

describe('VenteeService', () => {
  let service: VenteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
