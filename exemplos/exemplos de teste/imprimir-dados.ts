/*
Nesse exemplo, criamos uma interface Pessoa com três propriedades: nome (string), idade (number) e cidade (string). Em seguida, criamos uma função imprimirDados que recebe um parâmetro do tipo Pessoa e imprime as informações dessa pessoa no console.

Por fim, criamos um objeto pessoa1 com as informações de uma pessoa e passamos esse objeto como argumento para a função imprimirDados. O resultado será a impressão das informações da pessoa no console.
*/

interface Pessoa {
    nome: string;
    idade: number;
    cidade: string;
  }
  
  function imprimirDados(pessoa: Pessoa) {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade}`);
    console.log(`Cidade: ${pessoa.cidade}`);
  }
  
  const pessoa_1: Pessoa = {
    nome: "José",
    idade: 25,
    cidade: "Maceió"
  };
  
  imprimirDados(pessoa_1);