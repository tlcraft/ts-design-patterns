import { Component } from "../interfaces/component.interface";
import { Item } from "../interfaces/item.interface";

export class CompositeComponet implements Component {
    constructor(public id: string, private components: Component[] = []) {}

    addComponent(component: Component): void {
        this.components.push(component);
    }

    removeComponent(id: string): void {
        this.components = this.components.filter(c => c.id !== id);
    }

    getComponents(): Component[] {
        return this.components;
    }

    process(item: Item) {
        for(const component of this.components) {
            component.process(item);
        }
    }
}
