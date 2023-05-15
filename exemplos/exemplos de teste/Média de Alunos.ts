interface Aluno {
  nome: string;
  notas: number[];
}

const alunos: Aluno[] = [
  { nome: "Alícia", notas: [7.5, 8.0, 9.0, 7.5] },
  { nome: "Kaú", notas: [6.5, 7.0, 8.0, 7.5] },
  { nome: "Ezequiel", notas: [9.5, 8.0, 7.0, 8.5] }
];

/**
 * Função responsável por adicionar um novo aluno ao array 'alunos'
 */
function adicionarAluno(): void {
  // Solicita o nome do aluno ao usuário e converte para letras maiúsculas
  const nome: string = prompt("Digite o nome do aluno:")?.toUpperCase();

  // Cria um array vazio para armazenar as notas do aluno
  const notas: number[] = [];

  // Solicita as 4 notas do aluno e as adiciona ao array 'notas'
  for (let i = 1; i <= 4; i++) {
    const nota: number = parseFloat(prompt(`Digite a nota ${i} do aluno:`));
    notas.push(nota);
  }

  // Cria um objeto 'aluno' com as propriedades 'nome' e 'notas' e o adiciona ao array 'alunos'
  const aluno: Aluno = {
    nome,
    notas
  };
  alunos.push(aluno);
}

// Pergunta ao usuário se deseja visualizar as notas de um aluno existente ou adicionar um novo aluno
let visualizarNotas: number = parseInt(prompt("Deseja visualizar as notas de um aluno (1) ou adicionar um novo aluno (0)?"));

// Verifica a opção escolhida pelo usuário
if (visualizarNotas === 1) {
  // Caso o usuário queira visualizar as notas de um aluno existente
  const nomeAluno: string = prompt("Digite o nome do aluno a ser consultado:")?.toUpperCase();

  // Procura o aluno no array 'alunos' pelo nome
  let alunoEncontrado: Aluno | undefined = undefined;
  for (const aluno of alunos) {
    if (aluno.nome === nomeAluno) {
      alunoEncontrado = aluno;
      break;
    }
  }

  // Exibe as notas e média do aluno encontrado, ou uma mensagem de aluno não encontrado
  if (alunoEncontrado) {
    console.log("Notas do aluno " + alunoEncontrado.nome + ":");
    console.log("Nota 1: " + alunoEncontrado.notas[0]);
    console.log("Nota 2: " + alunoEncontrado.notas[1]);
    console.log("Nota 3: " + alunoEncontrado.notas[2]);
    console.log("Nota 4: " + alunoEncontrado.notas[3]);

    const media: number =
      alunoEncontrado.notas.reduce((total, nota) => total + nota, 0) /
      alunoEncontrado.notas.length;

    console.log("Média: " + media.toFixed(2));
  } else {
    console.log("Aluno não encontrado.");
  }
} else if (visualizarNotas === 0) {
  // Caso o usuário queira adicionar um novo aluno
  adicionarAluno();
  console.log(alunos);
} else {
  console.log("Opção inválida")
}
