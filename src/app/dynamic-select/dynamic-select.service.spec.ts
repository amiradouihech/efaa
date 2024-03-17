import { TestBed } from '@angular/core/testing';

import { DynamicSelectService } from './dynamic-select.service';

describe('DynamicSelectService', () => {
  let service: DynamicSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
