import { Memento } from "../interfaces/memento";
import { Originator } from "../interfaces/originator";
import { State } from "../interfaces/state";
import { StateMemento } from "./state-memento";

export class StateOriginator implements Originator<State> {
    constructor(public state: State) {}

    setMemento(memento: Memento<State>): void {
        this.state = memento.getState();
    }

    createMemento(): Memento<State> {
        return new StateMemento(this.state);
    }
}
