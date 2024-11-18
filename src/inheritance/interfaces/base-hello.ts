import { IHello } from "./hello";

export abstract class BaseHello implements IHello {
    hello(): void {
        console.log("Hello");
    }
}
