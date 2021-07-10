interface MyInterface {
    requiredProp: string | number | undefined;
    optionalProp?: string | number;
}

it("union types", () => {
    let myVar: MyInterface = { requiredProp: "" };

    myVar.requiredProp = "foo"; // Valid
    myVar.requiredProp = 10; // Valid
    // myVar.requiredProp = true; // TypeError


    myVar.requiredProp = undefined; // Valid
    myVar.optionalProp = undefined; // Valid
});
