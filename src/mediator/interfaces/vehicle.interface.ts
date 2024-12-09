import { Message } from "./message.interface";

export interface Vehicle {
    operation: (message: Message) => void;
}
