/**
 * Verificar Número Par ou Ímpar:
 *
 * Escreva uma função que receba um número como argumento
 * e retorne "par" se o número for par e "ímpar" se for ímpar.
 *
 * Exemplo:
 * - Para o número 2, a saída deve ser "par".
 * - Para o número 3, a saída deve ser "ímpar".
 */

function evenOrOdd(number: number){
  if (number % 2 === 0){
    return "par"
  }else{
    return "ímpar"
  }
}

// Execute seus testes 👇

describe("Verificar Número Par ou Ímpar", () => {
  test("Número 2", () => {
    expect(evenOrOdd(2)).toBe("par");
  });

  test("Número 3", () => {
    expect(evenOrOdd(3)).toBe("ímpar");
  });
});