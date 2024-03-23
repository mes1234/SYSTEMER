import { TestBed } from '@angular/core/testing';

import { SolverInterfaceService } from './solver-interface.service';

describe('SolverInterfaceService', () => {
  let service: SolverInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolverInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
