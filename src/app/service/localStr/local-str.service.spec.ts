import { TestBed } from '@angular/core/testing';

import { LocalStrService } from './local-str.service';

describe('LocalStrService', () => {
  let service: LocalStrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
