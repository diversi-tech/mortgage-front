import { TestBed } from '@angular/core/testing';

import { DocumentsListCustomerService } from './documents-list-customer.service';

describe('DocumentsListCustomerService', () => {
  let service: DocumentsListCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsListCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
