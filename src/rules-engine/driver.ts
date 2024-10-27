import { ItemTypes } from "./enums/item-types.enum";
import { Item } from "./interfaces/item.interface";
import { CheeseItemRule } from "./services/cheese-item.service";
import { RegularItemRule } from "./services/regular-item.service";
import { RulesEngine } from "./services/rules-engine.service";

const getItems = (): Item[] => {
    return [
        {
            quality: 10,
            name: "cheese",
            type: ItemTypes.Cheese
        },
        {
            quality: 80,
            name: "emerald",
            type: ItemTypes.Emerald
        },
        {
            quality: 100,
            name: "banana",
            type: ItemTypes.Regular
        }
    ]
};

const printItems = (items: Item[]): void => {
    items.forEach(item => {
        console.log(`${item.name}: ${item.quality}`)
    });
};

const driver = (): void => {
    const items = getItems();
    console.log("Original Items: ");
    printItems(items);

    const regularRule = new RegularItemRule();
    const cheeseRule = new CheeseItemRule();
    const rulesEngine = new RulesEngine([regularRule, cheeseRule]);

    for(let daysRemaining = 15; daysRemaining >= 0; daysRemaining--) {
        for(let item of items) {
            rulesEngine.applyRules(item, daysRemaining);
        }
    }

    console.log("\nUpdated Items: ");
    printItems(items);
};

driver();
