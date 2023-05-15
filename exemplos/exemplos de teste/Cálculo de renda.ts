interface Pessoa {
  nome: string;
  salario: number;
  salarioLiquido: number;
}

const pessoas: Pessoa[] = [];


// Função responsável por adicionar uma pessoa ao array 'pessoas'
 
function adicionarPessoa(): void {
  // Solicita o nome da pessoa ao usuário
  const nome: string = prompt("Digite o nome da pessoa:");

  // Solicita o salário da pessoa ao usuário e converte para número
  const salario: number = parseFloat(prompt("Digite o salário da pessoa:"));

  // Calcula o salário líquido da pessoa utilizando a função calcularRendaLiquida()
  const salarioLiquido: number = calcularRendaLiquida(salario);

  // Cria um objeto 'pessoa' com as propriedades 'nome', 'salario' e 'salarioLiquido' e o adiciona ao array 'pessoas'
  const pessoa: Pessoa = {
    nome,
    salario,
    salarioLiquido
  };

  pessoas.push(pessoa);
}


//Função responsável por calcular a renda líquida a partir do salário
 
function calcularRendaLiquida(salario: number): number {
  const desconto: number = 400;
  return salario - desconto;
}

// Loop principal para continuar perguntando ao usuário se deseja ver ou adicionar uma pessoa
while (true) {
  // Solicita ao usuário a opção desejada (ver ou adicionar uma pessoa)
  const opcao: number = parseInt(prompt("Deseja ver (1) ou adicionar (0) uma pessoa?"));

  if (opcao === 1) {
    // Opção selecionada: Ver uma pessoa

    // Solicita ao usuário o nome da pessoa a ser consultada
    const nomePessoa: string = prompt("Digite o nome da pessoa a ser consultada:");

    // Procura a pessoa no array 'pessoas' pelo nome utilizando o método find()
    const pessoaEncontrada: Pessoa | undefined = pessoas.find((pessoa) => pessoa.nome === nomePessoa);

    if (pessoaEncontrada) {
      // Se a pessoa for encontrada, exibe suas informações (nome, salário e salário líquido) no console
      console.log("Nome: " + pessoaEncontrada.nome);
      console.log("Salário: " + pessoaEncontrada.salario);
      console.log("Salário Líquido: " + pessoaEncontrada.salarioLiquido);
    } else {
      // Se a pessoa não for encontrada, exibe uma mensagem informando que a pessoa não foi encontrada
      console.log("Pessoa não encontrada.");
    }
  } else if (opcao === 0) {
    // Opção selecionada: Adicionar uma pessoa

    // Chama a função adicionarPessoa() para adicionar uma nova pessoa ao array 'pessoas'
    adicionarPessoa();
  } else {
    // Opção inválida
    console.log("Opção inválida.");
  }

  // Pergunta ao usuário se deseja continuar (1 - Sim, 0 - Não)
  const continuar: number = parseInt(prompt("Deseja continuar? (1 - Sim, 0 - Não)"));
  if (continuar === 0) {
    break;
  }
}

console.log(pessoas);
