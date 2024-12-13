import { IMediator } from "../interfaces/mediator.interface";
import { Message } from "../interfaces/message.interface";
import { Vehicle } from "../interfaces/vehicle.interface";

export class AirportMediator implements IMediator {
    public constructor(private airplane: Vehicle, private helicopter: Vehicle) {}

    notify(sender: Vehicle, message: Message): void {
        if (sender === this.airplane) {
            this.helicopter.operation(message);
        }

        if (sender === this.helicopter) {
            this.airplane.operation(message);
        }
    }
}
