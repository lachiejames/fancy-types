it("optional chaining", () => {
    const untypedVar: any = { validProp: "value" };

    expect(untypedVar.validProp).toEqual("value");
    expect(untypedVar.invalidProp).toEqual(undefined);
    expect(() => untypedVar.invalidProp.throwErr).toThrowError();
    expect(() => untypedVar.invalidProp?.throwErr).not.toThrowError();
});
