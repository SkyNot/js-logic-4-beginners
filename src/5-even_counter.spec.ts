/**
 * Contar Números Pares em um Array:
 *
 * Crie uma função que receba um array de números e
 * retorne a quantidade de números pares presentes no array.
 *
 * Exemplo:
 * - Para o array [1, 2, 3, 4, 5], a saída deve ser 2. Pois há 2 números pares (2 e 4).
 * - Para o array [10, 3, 19, 7, 6], a saída deve ser 2. Pois há 2 números pares (10 e 6).
 * - Para o array [3, 2, 1], a saída deve ser 1. Pois há 1 número par (2).
 */

function evenCounter(numbers: number[]) {
  if (numbers.length === 0) {
    return undefined;
  }

  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0){
      count++;
    }
}
return count;
}

// Execute seus testes 👇

describe("Contar Números Pares em um Array", () => {
  test("Array [1, 2, 3, 4, 5]", () => {
    expect(evenCounter([1, 2, 3, 4, 5])).toBe(2);
  });

  test("Array [10, 3, 19, 7, 6]", () => {
    expect(evenCounter([10, 3, 19, 7, 6])).toBe(2);
  });

  test("Array [3, 2, 1]", () => {
    expect(evenCounter([3, 2, 1])).toBe(1);
  });
});
