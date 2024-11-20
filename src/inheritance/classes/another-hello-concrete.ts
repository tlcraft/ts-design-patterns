import { BaseHello } from "../interfaces/base-hello";

export class AnotherHelloConcrete extends BaseHello {
    hello(): void {
        console.log("Hi, hello.");
        super.hello();
    }
}
