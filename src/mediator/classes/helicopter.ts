import { Message } from "../interfaces/message.interface";
import { Aircraft } from "../interfaces/aircraft.interface";

export class Helicopter implements Aircraft {
    operation = (message: Message) => {
        console.log('The helicopter received a message: ', message);
    };
}
