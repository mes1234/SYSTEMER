import { Simulator } from './simulator'


describe('Simulator worker', () => {
    const sim = new Simulator();

    it('should create', () => {
        expect(sim).toBeInstanceOf(Simulator);
    });
});