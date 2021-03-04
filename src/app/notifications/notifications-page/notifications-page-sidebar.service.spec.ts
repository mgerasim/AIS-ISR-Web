import { TestBed } from '@angular/core/testing';

import { NotificationsPageSidebarService } from './notifications-page-sidebar.service';

describe('NotificationsPageSidebarService', () => {
  let service: NotificationsPageSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationsPageSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
