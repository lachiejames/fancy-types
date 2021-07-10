import { ObjProxyArg, set } from "ts-object-path";

interface MiddleObject {
    child: number;
}

interface RootObject {
    middle: MiddleObject;
}

const initObject = (): RootObject => {
    return {
        middle: {
            child: 0,
        },
    };
};

const root: RootObject = initObject();

const updateObject = <T>(proxy: ObjProxyArg<RootObject, T>, context: Partial<T>): void => {
    set(root, proxy, context);
};

it("deep property types", () => {
    expect(root).toEqual({ middle: { child: 0 } });

    updateObject((o) => o.middle.child, 1);
    expect(root).toEqual({ middle: { child: 1 } });
});
