import { TestBed } from '@angular/core/testing';

import { PlannedService } from './planned.service';

describe('PlannedService', () => {
  let service: PlannedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlannedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
