import { Injectable } from '@angular/core';
import { ItemType, Operation, OperationType } from '../common/Item';

@Injectable({
  providedIn: 'root'
})
export class SimulatorOrchestratorServiceService {

  private simulator: Worker

  constructor() {
    this.simulator = new Worker(new URL('./simulator/simulator-worker', import.meta.url), { type: 'module' });
    this.simulator.postMessage({ message: 1 })

    this.simulator.onmessage = (e: MessageEvent<Operation>) => {
      console.log(`Received message from worker: ${e.data}`);
    };
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
