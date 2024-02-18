import { Simulator } from '../../src/app/sevices/simulator/simulator';

console.log('Starting simulator');

const sim = new Simulator();

sim.attachMessagePublisher((message: any) => console.log(message));

(async () => {
    await sim.run();
})();
