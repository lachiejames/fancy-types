import { GaxiosError, GaxiosResponse, request } from "gaxios";

it("null coalescing", () => {
    expect(1 ?? 2).toEqual(1);
    expect(0 ?? 2).toEqual(0);
    expect(0 || 2).toEqual(2);
    expect(null ?? 2).toEqual(2);
    expect(undefined ?? 2).toEqual(2);
});

export const fetchData = async (): Promise<string[]> => {
    let definiteResponse: GaxiosResponse<string[]> | undefined;

    await request<string[]>({
        url: `www.example.com/api`,
        method: "GET",
    })
        .then((response: GaxiosResponse<string[]>) => (definiteResponse = response))
        .catch((response: GaxiosError<string[]>) => console.error(response));

    return definiteResponse?.data ?? [];
};
