import { Message } from "./message.interface";

export interface Mediator {
    notify(message: Message): void;
}
