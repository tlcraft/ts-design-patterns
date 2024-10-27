import { Item } from "../interfaces/item.interface";
import { IRulesEngine } from "../interfaces/rules-engine.interface";
import { Rule } from "../interfaces/rules.interface";

export class RulesEngine implements IRulesEngine {
    constructor(private rules: Rule[]) {}

    applyRules(item: Item, daysRemaining: number): Item {
        this.rules.forEach(rule => rule.applyRule(item, daysRemaining));

        return item;
    }
}
