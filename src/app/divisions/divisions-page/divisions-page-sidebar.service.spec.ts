import { TestBed } from '@angular/core/testing';

import { DivisionsPageSidebarService } from './divisions-page-sidebar.service';

describe('DivisionsPageSidebarService', () => {
  let service: DivisionsPageSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisionsPageSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
