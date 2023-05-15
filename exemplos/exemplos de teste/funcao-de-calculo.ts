// Neste exemplo, a função calcular recebe dois valores do tipo number e uma string que representa a operação a ser realizada.
/// Através da estrutura de controle switch, a função realiza a operação desejada e retorna o resultado.
/// Caso a operação passada como parâmetro não seja uma das opções válidas, a função lança uma exceção através do comando throw.

function calcular(): number {
  const valor1 = Number(prompt("Digite o primeiro valor: "));
  const valor2 = Number(prompt("Digite o segundo valor: "));
  const operacao = prompt("Digite a operação desejada (soma, sub, mult ou div): ");
  
  switch (operacao) {
    case "soma":
      return valor1 + valor2;
    case "sub":
      return valor1 - valor2;
    case "mult":
      return valor1 * valor2;
    case "div":
      return valor1 / valor2;
    default:
      throw new Error("Operação inválida!");
  }
}

console.log(calcular());
