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
  it("debería retornar 'V' si el número es 5", () => {
    expect(romanos(5)).toEqual("V");
  });
  it("debería retornar 'VI' si el número es 6", () => {
    expect(romanos(6)).toEqual("VI");
  });
  it("debería retornar 'IX' si el número es 9", () => {
    expect(romanos(9)).toEqual("IX");
  });
  it("debería retornar 'X' si el número es 10", () => {
    expect(romanos(10)).toEqual("X");
  });
  it("debería retornar 'XX' si el número es 20", () => {
    expect(romanos(20)).toEqual("XX");
  });
});