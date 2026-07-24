import { capitalize } from "./capitalize.js";

describe("capitalize", () => {
  it("capitalize", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
});
