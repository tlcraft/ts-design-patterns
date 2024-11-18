import { BaseHello } from "./base-hello";

export abstract class HelloHiAbs extends BaseHello {
    hello(): void {
        console.log("Hello, hi!");
    }
}
