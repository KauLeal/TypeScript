// Função responsável por calcular a renda líquida a partir do salário
function calcularRendaLiquida(salario: number): number {
  const desconto: number = 400;
  return salario - desconto;
}

// Função para obter o nome da pessoa
function obterNome(): string {
  const nome: string = prompt("Digite o nome:");
  return nome;
}

// Função para obter o salário da pessoa
function obterSalario(): number {
  const salario: number = parseFloat(prompt("Digite o salário:"));
  return salario;
}

// Função para exibir a renda líquida no console
function exibirRendaLiquida(nome: string, rendaLiquida: number): void {
  console.log(`O salário líquido de ${nome} é igual a ${rendaLiquida}.`);
}

// Função principal
function main(): void {
  // Obtém o nome da pessoa
  const nome: string = obterNome();

  // Obtém o salário da pessoa
  const salario: number = obterSalario();

  // Calcula a renda líquida
  const rendaLiquida: number = calcularRendaLiquida(salario);

  // Exibe a renda líquida no console
  exibirRendaLiquida(nome, rendaLiquida);
}

// Executa a função principal
main();
