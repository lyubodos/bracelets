import { TestBed } from '@angular/core/testing';

import { PhotoFetcherService } from './photo-fetcher.service';

describe('PhotoServiceService', () => {
  let service: PhotoFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
