import { StateOriginator } from "./classes/state-originator";

const driver = (): void => {
    const state = { id: 1234, data: "Initial data" };
    const stateOriginator = new StateOriginator(state);
    console.log('Initial state: ', stateOriginator.state);

    const mementos = [];

    mementos.push(stateOriginator.createMemento());

    stateOriginator.state = { id: 1234, data: "Changed data" };
    console.log('New state: ', stateOriginator.state);

    mementos.push(stateOriginator.createMemento());

    stateOriginator.setMemento(mementos[0]);

    console.log('Final state: ', stateOriginator.state);
};

driver();
