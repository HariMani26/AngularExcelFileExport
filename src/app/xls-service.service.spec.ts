import { TestBed } from '@angular/core/testing';

import { XlsServiceService } from './xls-service.service';

describe('XlsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XlsServiceService = TestBed.get(XlsServiceService);
    expect(service).toBeTruthy();
  });
});
