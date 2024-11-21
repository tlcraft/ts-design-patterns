import { AltHelloConcrete } from "./classes/alternative-hello-concrete";
import { AnotherHelloConcrete } from "./classes/another-hello-concrete";
import { HelloConcrete } from "./classes/hello-concrete";
import { HelloHiConcrete } from "./classes/hello-hi-concrete";

const driver = (): void => {
    const hello = new HelloConcrete();
    const altHello = new AltHelloConcrete();
    const anotherHello = new AnotherHelloConcrete();
    const helloHi = new HelloHiConcrete();

    hello.hello();
    altHello.hello();
    anotherHello.hello();
    helloHi.hello();
};

driver();
