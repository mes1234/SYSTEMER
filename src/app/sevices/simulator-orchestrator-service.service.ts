import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimulatorOrchestratorServiceService {

  private simulator: Worker

  constructor() {
    this.simulator = new Worker(new URL('./simulator-worker', import.meta.url), { type: 'module' });
    this.simulator.postMessage({ message: 1 })
  }

  update(newTime: number) {
    this.simulator.postMessage({ message: newTime })
  }
}
