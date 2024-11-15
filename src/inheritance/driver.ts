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
    const hello2 = new AltHelloConcrete();
    const hello3 = new AnotherHelloConcrete();
    const hello2nd = new HelloHiConcrete();

    hello.hello();
    hello2.hello();
    hello3.hello();
    hello2nd.hello();
};

driver();
