import { MessageType } from "../enums/message-type.enum";
import { Message } from "./message.interface";
import { Aircraft } from "./aircraft.interface";

export interface IMediator {
    notify(sender: Aircraft, message: Message,  messageType: MessageType): void;
}
