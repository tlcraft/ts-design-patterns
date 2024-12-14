import { Airplane } from "./classes/airplane";
import { AirportMediator } from "./classes/airport-mediator";
import { Helicopter } from "./classes/helicopter";

const driver = (): void => {
    const airplane = new Airplane();
    const helicopter = new Helicopter();
    const airTrafficControl = new AirportMediator(airplane, helicopter);

    const message = {
        data: 'METAR KSEA 081853Z 18007KT 10SM OVC013 07/05 A3022 RMK AO2 SLP241 T00720050'
    };

    airTrafficControl.notify(airplane, message);
    airTrafficControl.notify(helicopter, message);
};

driver();
