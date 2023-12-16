import { TestBed } from '@angular/core/testing';

import { FetchBalanceService } from './fetch-balance.service';

describe('FetchBalanceService', () => {
  let service: FetchBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
