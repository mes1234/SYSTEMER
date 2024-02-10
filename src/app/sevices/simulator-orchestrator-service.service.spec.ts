import { TestBed } from '@angular/core/testing';

import { SimulatorOrchestratorServiceService } from './simulator-orchestrator-service.service';

describe('SimulatorOrchestratorServiceService', () => {
  let service: SimulatorOrchestratorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulatorOrchestratorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
