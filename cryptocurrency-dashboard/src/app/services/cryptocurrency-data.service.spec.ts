import { TestBed } from '@angular/core/testing';

import { CryptocurrencyDataService } from './cryptocurrency-data.service';

describe('CryptocurrencyDataService', () => {
  let service: CryptocurrencyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptocurrencyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
