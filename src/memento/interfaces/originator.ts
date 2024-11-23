import { Memento } from "./memento";

export interface Originator<T> {
    setMemento(memento: Memento<T>): void;
    createMemento(): Memento<T>;
}
