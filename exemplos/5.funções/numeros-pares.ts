  // Essa função recebe dois parâmetros do tipo number, inicio e fim, e imprime todos os números pares no intervalo entre inicio e fim. Para isso, utiliza um loop for para iterar sobre os números nesse intervalo e um condicional if-else para verificar se cada número é par. Caso seja, o número é impresso no console utilizando a função console.log().

function NumerosPares(inicio: number, fim: number): void {
    for (let i = inicio; i <= fim; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  
  NumerosPares(1, 10);

