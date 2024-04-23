/**
 * Calculadora Simples:
 *
 * Crie uma função que receba dois números e uma
 * operação (adição, subtração, multiplicação ou divisão)
 * e retorne o resultado da operação aplicada aos dois números.
 *
 *
 * Exemplo:
 * - Para os números 2 e 3 e a operação "adição", a saída deve ser 5.
 * - Para os números 2 e 3 e a operação "subtração", a saída deve ser -1.
 * - Para os números 2 e 3 e a operação "multiplicação", a saída deve ser 6.
 */

type Operation = "adição" | "subtração" | "multiplicação" | "divisão";

function basicCalculator(num1: number, num2: number, operation: Operation) {
  switch (operation) {
    case "adição":
      return num1 + num2;
    case "subtração":
      return num1 - num2;
    case "multiplicação":
      return num1 * num2;
    case "divisão":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "error divisão por zero";
      }
    default:
      return "error: operação inválida.";
  }
}

// Execute seus testes 👇

describe("Calculadora Simples", () => {
  test("Adição", () => {
    expect(basicCalculator(2, 3, "adição")).toBe(5);
  });

  test("Subtração", () => {
    expect(basicCalculator(2, 3, "subtração")).toBe(-1);
  });

  test("Multiplicação", () => {
    expect(basicCalculator(2, 3, "multiplicação")).toBe(6);
  });

  test("Divisão", () => {
    expect(basicCalculator(6, 3, "divisão")).toBe(2);
  });
});
