// Background worker

export class Simulator {
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
}

const sim = new Simulator();

sim.run();


onmessage = (e: any) => {

    console.log(`Got smth: ${e.data.message}`)

    sim.sleepTime = e.data.message
}