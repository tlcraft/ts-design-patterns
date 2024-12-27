import { Airplane } from "./classes/airplane";
import { AirportMediator } from "./classes/airport-mediator";
import { Helicopter } from "./classes/helicopter";
import { MessageType } from "./enums/message-type.enum";

const driver = (): void => {
    const airTrafficControl = new AirportMediator();
    const airplane = new Airplane(airTrafficControl);
    const helicopter = new Helicopter();
    airTrafficControl.addAircraft(airplane);
    airTrafficControl.addAircraft(helicopter);

    const weatherMessage = {
        data: 'METAR KSEA 081853Z 18007KT 10SM OVC013 07/05 A3022 RMK AO2 SLP241 T00720050'
    };

    airTrafficControl.notify(airplane, weatherMessage, MessageType.Weather);
    airTrafficControl.notify(helicopter, weatherMessage, MessageType.Weather);

    const postitionMessage = {
        data: 'Seattle Tower, Cessna 123AB, 10 miles south of the airport, at 3,500 feet, inbound for landing with information Charlie.'
    }

    airTrafficControl.notify(airplane, postitionMessage, MessageType.Location);
    airTrafficControl.notify(helicopter, postitionMessage, MessageType.Location);

    airplane.updateCoordinates();
};

driver();
