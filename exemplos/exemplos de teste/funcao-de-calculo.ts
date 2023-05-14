// Neste exemplo, a função calcular recebe dois valores do tipo number e uma string que representa a operação a ser realizada. Através da estrutura de controle switch, a função realiza a operação desejada e retorna o resultado. Caso a operação passada como parâmetro não seja uma das opções válidas, a função lança uma exceção através do comando throw.

function calcular(valor1: number, valor2: number, operacao: string): number {
    switch (operacao) {
      case "soma":
        return valor1 + valor2;
      case "subtracao":
        return valor1 - valor2;
      case "multiplicacao":
        return valor1 * valor2;
      case "divisao":
        return valor1 / valor2;
      default:
        throw new Error("Operação inválida!");
    }
  }
  
  console.log(calcular(5, 3, "soma")); // Resultado: 8
  console.log(calcular(10, 4, "subtracao")); // Resultado:6
  console.log(calcular(7, 6, "multiplicacao")); // Resultado: 42
  console.log(calcular(100, 3, "divisao")); // Resultado: 33,33333333333333