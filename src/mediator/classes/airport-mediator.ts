import { MessageType } from "../enums/message-type.enum";
import { IMediator } from "../interfaces/mediator.interface";
import { Message } from "../interfaces/message.interface";
import { Aircraft } from "../interfaces/aircraft.interface";

export class AirportMediator implements IMediator {
    public aircrafts: Record<string, Aircraft> = {};
    public constructor() {}

    addAircraft(aircraft: Aircraft): void {
        this.aircrafts[`${aircraft.constructor.name}`] = aircraft;
    }

    notify(sender: Aircraft, message: Message, messageType: MessageType): void {
        switch (messageType) {
            case MessageType.Weather:
                if (sender.constructor.name === 'Airplane') {
                    const helicopter = this.aircrafts['Helicopter'];
                    helicopter.operation(message);
                }
        
                if (sender.constructor.name === 'Helicopter') {
                    const airplane = this.aircrafts['Airplane'];
                    airplane.operation(message);
                }
                break;
            case MessageType.Location:
                const locationResponse = {
                    data: `${sender.constructor.name}, Seattle Tower, roger. Expect runway 1A. Maintain 3,500 feet, and report 5 miles south.`
                };
                sender.operation(locationResponse);
                break;
            case MessageType.Update:
                const updateResponse = {
                    data: `Seattle Tower, roger. ${sender.constructor.name} has updated their coordinates.`
                };

                if (sender.constructor.name === 'Airplane') {
                    const helicopter = this.aircrafts['Helicopter'];
                    helicopter.operation(updateResponse);
                }
        
                if (sender.constructor.name === 'Helicopter') {
                    const airplane = this.aircrafts['Airplane'];
                    airplane.operation(updateResponse);
                }
                break;
            default:
                console.error('Message type not defined.');
        }
    }
}
