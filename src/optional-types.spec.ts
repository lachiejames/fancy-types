const myMethod = (requiredProp: string, optionalProp?: string): void => {};

interface MyInterface2 {
    requiredProp: string;
    optionalProp?: string;
}

it("optional types", () => {
    myMethod("arg1", "arg2"); // Valid
    myMethod("arg1");         // Valid
    // myMethod();            // TypeError

    let myVar: MyInterface2;

    myVar = { requiredProp: "arg1", optionalProp: "arg2" }; // Valid
    myVar = { requiredProp: "arg1" };                       // Valid
    // myVar = {};                                          // TypeError

    let myVar2: Partial<MyInterface2>;

    myVar2 = { requiredProp: "arg1", optionalProp: "arg2" }; // Valid
    myVar2 = { requiredProp: "arg1" };                       // Valid
    myVar2 = {};                                             // Valid
});
