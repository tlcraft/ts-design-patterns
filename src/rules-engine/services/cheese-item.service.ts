import { ItemTypes } from "../enums/item-types.enum";
import { Item } from "../interfaces/item.interface";
import { Rule } from "../interfaces/rules.interface";

export class CheeseItemRule implements Rule {
    applyRule(item: Item, daysRemaining: number): Item {
        if (item.type != ItemTypes.Cheese) {
            return item;
        }

        if (daysRemaining > 10) {
            item.quality++;
        } else if (5 <= daysRemaining && daysRemaining <= 10) {
            item.quality += 2;
        } else if (daysRemaining < 5) {
            item.quality += 3;
        }

        return item;
    }
}
