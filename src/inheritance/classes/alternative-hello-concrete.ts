import { BaseHello } from "../interfaces/base-hello";

export class AltHelloConcrete extends BaseHello {
    hello(): void {
        console.log("Hi");
    }
}
