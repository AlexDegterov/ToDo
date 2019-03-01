import { TestBed } from '@angular/core/testing';

import { SaveLocalService } from './save-local.service';

describe('SaveLocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveLocalService = TestBed.get(SaveLocalService);
    expect(service).toBeTruthy();
  });
});
