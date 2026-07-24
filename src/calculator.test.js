import calculator from "./calculator.js";

describe("calculator", () => {
  it("add", () => expect(calculator.add(2, 2)).toBe(4));
  it("subtract", () => expect(calculator.subtract(2, 2)).toBe(0));
  it("multiply", () => expect(calculator.multiply(2, 2)).toBe(4));
  it("divide", () => expect(calculator.divide(2, 2)).toBe(1));
});
