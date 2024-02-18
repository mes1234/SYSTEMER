import { Injectable } from '@angular/core';
import { ItemType, Operation, OperationType } from '../common/Item';
import { ElementType } from '../common/common';

@Injectable({
  providedIn: 'root'
})
export class SimulatorOrchestratorServiceService {

  private simulator: Worker

  constructor() {
    this.simulator = new Worker(new URL('./simulator-worker', import.meta.url), { type: 'module' });
    this.simulator.postMessage({ message: 1 })

    this.simulator.onmessage = (event) => {
    }

    update(newTime: number) {
      this.simulator.postMessage({
        type: OperationType.Update,
        itemType: ItemType.Element,
        item: {
          name: 'Sleep time',
          id: 'sleepTime',
          type: 'Regulator'
        }
      });
    }
  }
