import { StateOriginator } from "./classes/state-originator";

const caretakerDriver = (): void => {
    const state = { id: 1234, data: { details: "Initial data" } };
    const stateOriginator = new StateOriginator(state);
    console.log('Initial state: ', stateOriginator.state);

    const mementos = [];

    mementos.push(stateOriginator.createMemento());

    stateOriginator.state = { id: 1234, data: { details: "Changed data" } };
    console.log('New state: ', stateOriginator.state);

    mementos.push(stateOriginator.createMemento());

    stateOriginator.state = { id: 1234, data: { details: "Changed data again", type: "edit" } };
    console.log('Next state: ', stateOriginator.state);

    mementos.push(stateOriginator.createMemento());

    stateOriginator.setMemento(mementos[0]);

    console.log('Final state: ', stateOriginator.state);

    console.log('Mementos: \n');
    mementos.forEach((memento, index) => 
        console.log(`Memento ${index}: `, JSON.stringify(memento))
    );
};

caretakerDriver();
