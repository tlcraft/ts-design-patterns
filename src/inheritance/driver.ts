import { IHello } from "./interfaces/hello";

abstract class BaseHello implements IHello {
    hello(): void {
        console.log("Hello");
    }
}

abstract class HelloHiAbs extends BaseHello {
    hello(): void {
        console.log("Hello, hi!");
    }
}

class HelloConcrete extends BaseHello {

}

class AltHelloConcrete extends BaseHello {
    hello(): void {
        console.log("Hi");
    }
}

class AnotherHelloConcrete extends BaseHello {
    hello(): void {
        console.log("Hi, hello.");
        super.hello();
    }
}

class HelloHiConcrete extends HelloHiAbs {
    
}

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
