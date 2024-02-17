import { Simulator } from './simulator-worker';


describe('Simulator worker', () => {
    const sim = new Simulator();

    it('should create', () => {
        expect(sim).toBeInstanceOf(Simulator);
    });
});