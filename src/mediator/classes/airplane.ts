import { Message } from "../interfaces/message.interface";
import { Aircraft } from "../interfaces/aircraft.interface";
import { AirportMediator } from "./airport-mediator";
import { MessageType } from "../enums/message-type.enum";

export class Airplane implements Aircraft {
    constructor(private mediator: AirportMediator) {}

    operation = (message: Message) => {
        console.log('The airplane received a message: ', message);
    };

    updateCoordinates = () => {
        console.log('Updating coordinates...')
        const message = {
            data: 'Coordinates have changes.'
        };

        this.mediator.notify(this, message, MessageType.Update);
    }
}
