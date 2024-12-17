import { MessageType } from "../enums/message-type.enum";
import { Message } from "./message.interface";
import { Vehicle } from "./vehicle.interface";

export interface IMediator {
    notify(sender: Vehicle, message: Message,  messageType: MessageType): void;
}
