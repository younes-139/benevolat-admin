import { TestBed } from '@angular/core/testing';

import { RecompenseService } from './recompense.service';

describe('RecompenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecompenseService = TestBed.get(RecompenseService);
    expect(service).toBeTruthy();
  });
});
