import romanos from "./romanos.js";

describe("Romanos", () => {
  it("deberia retornar 'I' si el numero es 1", () => {
    expect(romanos(1)).toEqual("I");
  });
});