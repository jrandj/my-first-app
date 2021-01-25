export class CounterService {
    activeToInactiveCounter = 0;
    InactiveToActiveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('Active to Inactive: ' + this.activeToInactiveCounter);
    }

    incrementInactiveToActive() {
        this.InactiveToActiveCounter++;
        console.log('Inactive to Active: ' + this.InactiveToActiveCounter);
    }
}