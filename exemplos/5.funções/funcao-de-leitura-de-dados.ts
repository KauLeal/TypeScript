// Nesse exemplo, a função imprimirDadosPessoa recebe como parâmetros o nome (do tipo string), a idade (do tipo number) e o email (do tipo string) da pessoa. Dentro da função, os dados são impressos no console usando a função console.log.

function imprimirDadosPessoa(nome: string, idade: number, email: string) {
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Email: ${email}`);
  }

  imprimirDadosPessoa("João", 30, "joao@gmail.com");
  imprimirDadosPessoa("Carlos", 42, "carlos@gmail.com");
  imprimirDadosPessoa("Rebeca", 18, "rebeca@gmail.com");