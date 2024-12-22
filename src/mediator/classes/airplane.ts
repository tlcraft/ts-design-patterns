import { Message } from "../interfaces/message.interface";
import { Aircraft } from "../interfaces/aircraft.interface";

export class Airplane implements Aircraft {
    operation = (message: Message) => {
        console.log('The airplane received a message: ', message);
    };
}
