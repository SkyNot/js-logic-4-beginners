/**
 * Ordenar Array:
 *
 * Escreva uma função que receba um array de números e
 * retorne o mesmo array ordenado em ordem crescente.
 *
 * Exemplo:
 * - Para o array [1, 2, 3, 4, 5], a saída deve ser [1, 2, 3, 4, 5].
 * - Para o array [10, 3, 19, 7, 6], a saída deve ser [3, 6, 7, 10, 19].
 * - Para o array [3, 2, 1], a saída deve ser [1, 2, 3].
 */

function orderArray(numbers: number[]): number[] {
  const n = numbers.length;
  let temp: number;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  return numbers;
}

// Execute seus testes 👇

describe("Ordenar Array", () => {
  test("Array [1, 2, 3, 4, 5]", () => {
    expect(orderArray([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test("Array [10, 3, 19, 7, 6]", () => {
    expect(orderArray([10, 3, 19, 7, 6])).toStrictEqual([3, 6, 7, 10, 19]);
  });

  test("Array [3, 2, 1]", () => {
    expect(orderArray([3, 2, 1])).toStrictEqual([1, 2, 3]);
  });
});
