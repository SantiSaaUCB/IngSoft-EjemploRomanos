import romanos from "./romanos.js";

describe("Romanos", () => {
  it("deberia retornar 'I' si el numero es 1", () => {
    expect(romanos(1)).toEqual("I");
  });
  it("deberia retornar 'II' si el numero es 2", () => {
    expect(romanos(2)).toEqual("II");
  });
  it("deberia retornar 'III' si el numero es 3", () => {
    expect(romanos(3)).toEqual("III");
  });
  it("debería retornar 'IV' si el número es 4", () => {
    expect(romanos(4)).toEqual("IV");
  });  
});