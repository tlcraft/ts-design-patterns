import { Memento } from "../interfaces/memento";
import { State } from "../interfaces/state";

export class StateMemento implements Memento<State> {
    constructor(private state: State) {}

    getState(): State {
        return this.state;
    }

    setState(state: State): void {
        this.state = state;
    }
}
