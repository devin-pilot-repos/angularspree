import { TestBed } from '@angular/core/testing';

import { SearchingService } from './searching.service';

describe('SearchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchingService = TestBed.inject(SearchingService);
    expect(service).toBeTruthy();
  });
});
