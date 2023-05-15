/*
Nesse exemplo, criamos uma classe Pessoa com três propriedades: nome (string), idade (number) e cidade (string).
Em seguida, criamos um construct para ela. Ele será responsável por receber os valores digitados pelo usuário
para montar o objeto pertencente a essa classe.
*/

class Pessoa {
  nome: string;
  idade: number;
  cidade: string;

  constructor(nome: string, idade: number, cidade: string) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }
}

const pessoas: Pessoa[] = [];     // É criado o array que será imprimido no final do código mostrando todos os objetos

let adicionarPessoa = true;       // Variável criada para manter o while ativo até que deixe de ser true

while (adicionarPessoa) {
  let nome: string | null = null;     // É utilizado o | para criar uma intersecção, permitindo que as váriáveis assumam dois
  let idade: number | null = null;    // tipos diferentes: string/number e null. É inicializada como null.
  let cidade: string | null = null;

  while (!nome) {                                                 // Checa se nome é nula ou vazia
    nome = prompt("Digite o nome da pessoa:") ?? "Desconhecido";  // O ?? (operador de coalescência nula) oferece um valor padrão
  }                                                               // caso o valor fornecido seja nulo.

  while (!idade) {
    const idadeString = prompt("Digite a idade da pessoa:");   // No caso do da idade, o valor não poderá ser nulo pois
    const idadeNumber = Number(idadeString);                   // só queremos aceitar números. Nesse caso não usamos o parseInt
                                                               // pois a variável também pode ser null e isso causaria erro.

    if (isNaN(idadeNumber)) {
      alert("A idade deve ser um número válido!");
    } else {
        idade = idadeNumber;
     }
  }

  while (!cidade) {
    cidade = prompt("Digite a cidade da pessoa:") ?? "Desconhecida";
  }

  const pessoa = new Pessoa(nome, idade, cidade);             // Cria o objeto

  pessoas.push(pessoa);       // Insere o objeto no array

  const resposta = (prompt("Deseja adicionar outra pessoa? (S/N)") ?? "").toUpperCase(); 

  if (resposta === "N") {
    adicionarPessoa = false;
  } else if (resposta !== "S") {
    alert("Resposta inválida. Por favor, digite S ou N.");
  }
}

console.log(pessoas);   // Imprime o array
