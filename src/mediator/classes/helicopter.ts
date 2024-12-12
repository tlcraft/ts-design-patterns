import { Message } from "../interfaces/message.interface";
import { Vehicle } from "../interfaces/vehicle.interface";

export class Helicopter implements Vehicle {
    operation = (message: Message) => {
        console.log('The helicopter received a message: ', message);
    };
}
