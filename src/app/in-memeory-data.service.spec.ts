import { TestBed } from '@angular/core/testing';

import { InMemeoryDataService } from './in-memeory-data.service';

describe('InMemeoryDataService', () => {
  let service: InMemeoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemeoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
