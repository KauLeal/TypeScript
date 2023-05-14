// Os tipos de objeto suportados pelo TypeScript incluem:

// object: representa um objeto genérico com propriedades arbitrarias.

let pessoa: object = { name: "João", age: 28 };

// Array: representa uma lista de valores do mesmo tipo.

let numeros: number[] = [1, 2, 3, 4];
let nomes: string[] = ["João", "Maria", "Pedro"];


// Tuple: representa uma lista de valores de diferentes tipos com um número fixo de elementos.

let tuple: [string, number] = ["João", 28];


// Enum: representa um conjunto de valores nomeados.

enum Cor {
    Vermelho,
    Verde,
    Azul,
  }
  
  let color: Cor = Cor.Verde;

  
// Class: representa uma classe que pode ter propriedades e métodos.

class Pessoa {
nome: string;
idade: number;

constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
}
}

let pessoa1: Pessoa = new Pessoa("João", 28);


// Interface: representa um conjunto de propriedades e métodos que um objeto pode ter.

interface Pessoa {
nome: string;
idade: number;
cidade: string;
}

let pessoa2: Pessoa = { nome: "Pedro", idade: 35, cidade: "Manaus" };

