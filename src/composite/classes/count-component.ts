import { Component } from "../interfaces/component.interface";
import { Item } from "../interfaces/item.interface";

export class CountComponent implements Component {
    constructor(public id: string) {}

    process(item: Item): void{
        item.count = 4;
    }
}
