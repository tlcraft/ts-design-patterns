import { Component } from "../interfaces/component.interface";
import { Item } from "../interfaces/item.interface";

export class NameCompoent implements Component {
    constructor(public id: string) {}

    process(item: Item): void{
        item.name = 'Name';
    }
}
