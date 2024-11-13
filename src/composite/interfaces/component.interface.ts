import { Item } from "./item.interface";

export interface Component {
    id: string;
    process(item: Item): void;
}
