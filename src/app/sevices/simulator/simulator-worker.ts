import { Element, Item, Link, Operation } from '../../common/Item';
import { Simulator } from './simulator';

// Background worker


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