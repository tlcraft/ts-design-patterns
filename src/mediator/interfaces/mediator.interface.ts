import { Message } from "./message.interface";

export interface IMediator {
    notify(message: Message): void;
}
