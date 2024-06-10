/**
 * Cálculo de Média:
 *
 * Crie uma função que receba um array de números e retorne a média aritmética desses números.
 *
 * Exemplo:
 * - Para o array [1, 2, 3, 4, 5], a saída deve ser 3.
 * - Para o array [10, 3, 19, 7, 6], a saída deve ser 9.
 * - Para o array [3, 2, 1], a saída deve ser 2.
 *
 * Dica: a média aritmética é o resultado da soma de todos os elementos divido pela quantidade de elementos.
 * Dica: utilize o método reduce para somar todos os elementos do array.
 */

function average(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// Execute seus testes 👇

describe("Cálculo de Média", () => {
  test("Array [1, 2, 3, 4, 5]", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });

  test("Array [10, 3, 19, 7, 6]", () => {
    expect(average([10, 3, 19, 7, 6])).toBe(9);
  });

  test("Array [3, 2, 1]", () => {
    expect(average([3, 2, 1])).toBe(2);
  });
});
