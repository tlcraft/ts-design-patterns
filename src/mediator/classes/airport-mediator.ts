import { MessageType } from "../enums/message-type.enum";
import { IMediator } from "../interfaces/mediator.interface";
import { Message } from "../interfaces/message.interface";
import { Aircraft } from "../interfaces/aircraft.interface";

export class AirportMediator implements IMediator {
    public constructor(private airplane: Aircraft, private helicopter: Aircraft) {}

    notify(sender: Aircraft, message: Message, messageType: MessageType): void {
        switch (messageType) {
            case MessageType.Weather:
                if (sender === this.airplane) {
                    this.helicopter.operation(message);
                }
        
                if (sender === this.helicopter) {
                    this.airplane.operation(message);
                }
                break;
            case MessageType.Location:
                const response = {
                    data: `${sender.constructor.name}, Seattle Tower, roger. Expect runway 1A. Maintain 3,500 feet, and report 5 miles south.`
                };
                sender.operation(response);
                break;
            default:
                console.error('Message type not defined.');
        }
    }
}
