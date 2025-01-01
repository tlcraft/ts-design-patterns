import { Message } from "./message.interface";

export interface Aircraft {
    operation: (message: Message) => void;
}
