import { ItemTypes } from "../enums/item-types.enum";
import { Item } from "../interfaces/item.interface";
import { Rule } from "../interfaces/rules.interface";

export class RegularItemRule implements Rule {
    applyRule(item: Item, daysRemaining: number): Item {
        if (item.type != ItemTypes.Regular || item.quality === 0) {
            return item;
        }

        if (daysRemaining > 10) {
            item.quality--;
        } else if (daysRemaining <= 10) {
            item.quality -= 2;
        }
        
        return item;
    }
}
