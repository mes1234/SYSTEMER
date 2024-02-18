import { Element, Item, Link, Operation } from '../../common/Item';

export class Simulator {

    private publisher!: { (message: any, targetOrigin: string, transfer?: Transferable[] | undefined): void; (message: any, options?: WindowPostMessageOptions | undefined): void; };

    attachMessagePublisher(postMessage: { (message: any, targetOrigin: string, transfer?: Transferable[] | undefined): void; (message: any, options?: WindowPostMessageOptions | undefined): void; }) {
        this.publisher = postMessage;

    }
    sleepTime: number = 10;


    async run() {
        while (true) {
            await this.calculate();

            this.publisher("Hello from the simulator");
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