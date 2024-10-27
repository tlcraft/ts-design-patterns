import { Item } from "./item.interface";

export interface Rule {
    applyRule(item: Item, daysRemaining: number): Item;
}
