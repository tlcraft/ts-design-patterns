import { Item } from "./item.interface";

export interface IRulesEngine {
    applyRules(item: Item, daysRemaining: number): Item;
}
