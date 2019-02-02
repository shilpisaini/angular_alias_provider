import { TestBed } from '@angular/core/testing';

import { DesktopService } from './desktop.service';

describe('DesktopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesktopService = TestBed.get(DesktopService);
    expect(service).toBeTruthy();
  });
});
