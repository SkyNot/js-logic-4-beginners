/**
 * Verificar Palíndromo:
 *
 * Escreva uma função que verifique se uma string é um palíndromo.
 * Um palíndromo é uma palavra, frase, número ou qualquer outra sequência
 * de caracteres que permanece igual quando lida de trás para frente.
 *
 * Exemplo:
 * - Para a string "arara", a saída deve ser true.
 * - Para a string "desenvolvimento", a saída deve ser false.
 * - Para a string "12321", a saída deve ser true.
 * - Para a string "12345", a saída deve ser false.
 */

function isPalindrome(str: string): boolean {
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }

  return true;
}

// Execute seus testes 👇

describe("Verificar Palíndromo", () => {
  test("String 'arara'", () => {
    expect(isPalindrome("arara")).toBe(true);
  });

  test("String 'desenvolvimento'", () => {
    expect(isPalindrome("desenvolvimento")).toBe(false);
  });

  test("String '12321'", () => {
    expect(isPalindrome("12321")).toBe(true);
  });

  test("String '12345'", () => {
    expect(isPalindrome("12345")).toBe(false);
  });
});
