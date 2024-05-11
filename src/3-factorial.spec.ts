/**
 * Fatorial de um Número:
 *
 * Escreva uma função que calcule o fatorial de um número dado.
 * O fatorial de um número n é o produto de todos os inteiros positivos menores ou iguais a n.
 *
 * n! = n * (n - 1) * (n - 2) * ... * 1
 *
 * Exemplo:
 * - Para o número 5, a saída deve ser 120. Pois 5 * 4 * 3 * 2 * 1 = 120.
 * - Para o número 3, a saída deve ser 6. Pois 3 * 2 * 1 = 6.
 * - Para o número 1, a saída deve ser 1. Pois 1 = 1.
 */

function factorial(num: number) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

// Execute seus testes 👇

describe("Fatorial de um Número", () => {
  test("Número 5", () => {
    expect(factorial(5)).toBe(120);
  });

  test("Número 3", () => {
    expect(factorial(3)).toBe(6);
  });

  test("Número 1", () => {
    expect(factorial(1)).toBe(1);
  });
});
