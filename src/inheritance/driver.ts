interface IHello {
    hello(): void;
}

abstract class Hello implements IHello {
    hello(): void {
        console.log("Hello");
    }
}

abstract class Hello2 extends Hello {
    hello(): void {
        console.log("Hello2");
    }
}

class Hello2Concrete extends Hello2 {
    
}

class HelloConcrete extends Hello {

}

class HelloConcrete2 extends Hello {
    hello(): void {
        console.log("Hi");
    }
}

class HelloConcrete3 extends Hello {
    hello(): void {
        console.log("Hi, hello");
        super.hello();
    }
}

const driver = (): void => {
    const hello = new HelloConcrete();
    const hello2 = new HelloConcrete2();
    const hello3 = new HelloConcrete3();
    const hello2nd = new Hello2Concrete();

    hello.hello();
    hello2.hello();
    hello3.hello();
    hello2nd.hello();
};

driver();
