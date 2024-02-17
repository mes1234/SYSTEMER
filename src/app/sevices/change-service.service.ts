import { Injectable } from '@angular/core';
import { ElementSetup, ElementType } from '../common/common';
import { SimulatorOrchestratorServiceService } from './simulator-orchestrator-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChangeServiceService {

  constructor(private analyzer: SimulatorOrchestratorServiceService) { }

  public updateElement(elementToUpdate: ElementSetup): void {
    console.log(`Element ${elementToUpdate.id} was updated`)

    this.analyzer.update(10);
  }

  public getElementSetup(elementId: string): ElementSetup {
    return {
      id: elementId,
      name: "dummy",
      selectedType: ElementType.Valve
    }
  }
}
