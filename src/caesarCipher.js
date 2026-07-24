function shiftChar(char, shift) {
  const code = char.charCodeAt(0);
  let base;

  if (code >= 97 && code <= 122) base = 97;
  else if (code >= 65 && code <= 90) base = 65;
  else return char;

  const pos = code - base;
  const shifted = (((pos + shift) % 26) + 26) % 26;
  return String.fromCharCode(shifted + base);
}

export function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
}
