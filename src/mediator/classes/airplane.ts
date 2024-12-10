import { Message } from "../interfaces/message.interface";
import { Vehicle } from "../interfaces/vehicle.interface";

export class Airplane implements Vehicle {
    operation = (message: Message) => {
        console.log('Received message from the helicopter: ', message);
    };
}
