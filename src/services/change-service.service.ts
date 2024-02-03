import { Injectable } from '@angular/core';
import { ElementSetup, ElementType } from '../app/common/common';

@Injectable({
  providedIn: 'root'
})
export class ChangeServiceService {

  constructor() { }

  public updateElement(elementToUpdate: ElementSetup): void {
    console.log(`Element ${elementToUpdate.id} was updated`)
  }

  public getElementSetup(elementId: string): ElementSetup {
    return {
      id: elementId,
      name: "dummy",
      selectedType: ElementType.Amqp
    }
  }
}
