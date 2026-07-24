import { caesarCipher } from "./caesarCipher.js";

describe("caesarCipher", () => {
  it("moves basic letters", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  it("wraps at the end of alphabet", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  it("respects char size", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  it("Dosen't remove spaces and special char", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
