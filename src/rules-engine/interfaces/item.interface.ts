import { ItemTypes } from "../enums/item-types.enum";

export interface Item {
    quality: number;
    name: string;
    type: ItemTypes;
}
