/*
Nesse exemplo, criamos uma interface Pessoa com três propriedades: nome (string), idade (number) e cidade (string).
Em seguida, criamos uma função imprimirDados que recebe um parâmetro do tipo Pessoa e imprime as informações dessa pessoa no console.
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

while (true) {
  const resposta = prompt("Deseja inserir uma pessoa? (S = sim / N = Não)"); // Pergunta ao usuário se ele quer inserir uma pessoa
  if (!resposta || resposta.toLowerCase() === "n") { // O ! verifica se resposta é nula ou indefinida. Caso seja,
    break;                                           // ou o usuário digite "n", o código pára.
  } else if (resposta.toLowerCase() !== "s") {       // Caso o usuário digite "s", o código continua.
    continue;
  }

  const nome = prompt("Digite o nome da pessoa:");   // Cria a constante nome a partir do valor digitado pelo usuário.
  if (!nome) {                                       // Checa se nome é nula ou indefinida
    continue;
  }

  let idade: number;                                 // Cria a variável idade (usamos uma variável pois ela será manipulada no loop)
  while (true) {
    const idadeStr = prompt("Digite a idade da pessoa:");
    idade = parseInt(idadeStr || "0", 10);           // Transforma idade de string para inteiro utilizando a base 10.
    if (isNaN(idade)) {                              // Caso o usuário digite algo diferente de um inteiro,o loop reinicia.
      continue;                                      // Caso clique em "cancelar", idade será exibida como "0"
    }
    break;
  }

  const cidade = prompt("Digite a cidade da pessoa:") || "Desconhecida"; // Caso o usuário clique em "cancelar",
                                                                         // a cidade será exibida como "desconhecida".

  const pessoa: Pessoa = {nome, idade, cidade};      // Cria o objeto pessoa a partir das constantes obtidas
  imprimirDados(pessoa);                             // Chama a função ImprimirDados
}
