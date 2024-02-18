import { Element, Item, Link, Operation } from '../common/Item';

// Background worker

export class Simulator {

    attachMessagePublisher(postMessage: { (message: any, targetOrigin: string, transfer?: Transferable[] | undefined): void; (message: any, options?: WindowPostMessageOptions | undefined): void; }) {
        throw new Error('Method not implemented.');

    }
    sleepTime: number = 10;


    async run() {
        while (true) {
            await this.calculate();
        }
    }

    async calculate() {
        console.log(`Current value is ${this.sleepTime}`)

        await this.sleep(this.sleepTime * 1000);
    }

    async sleep(ms: number): Promise<void> {
        return new Promise<void>(resolve => setTimeout(resolve, ms));
    }

    addElement(element: Element) {
        console.log(`Adding element ${element.name}`)
    }

    addLink(Link: Link) {
        console.log(`Adding link ${Link.name} between ${Link.upstreamElementId} and ${Link.downstreamElementId}`)
    }

    removeElement(id: string) {
        console.log(`Removing element ${id}`)
    }

    removeLink(id: string) {
        console.log(`Removing link ${id}`)
    }

    updateElement(element: Element) {
        console.log(`Updating element ${element.name}`)
    }

    updateLink(Link: Link) {
        console.log(`Updating link ${Link.name}`)
    }

}

const sim = new Simulator();

// sim.attachMessagePublisher(postMessage);

sim.run();


onmessage = (e: MessageEvent<Operation>) => {

    let operation: Operation = e.data;

    if (operation.itemType === undefined) return;

    switch (e.type) {
        // Add your cases here
    }
}

postMessage('Hello from worker');