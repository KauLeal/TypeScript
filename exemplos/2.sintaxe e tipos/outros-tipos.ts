// Além dos tipos primitivos e de objeto, o TypeScript também oferece suporte a outros tipos que podem ser úteis no desenvolvimento de aplicações. Entre esses tipos, temos:

// Any: representa um tipo que pode ser qualquer coisa, permitindo que valores sejam passados sem uma verificação de tipo rigorosa.

let data: any = "hello";
data = 42;
data = true;


// Void: representa o valor de retorno de funções que não retornam valores. 

// Neste exemplo, a função imprimirMensagem recebe uma string como parâmetro e a imprime no console. Como a função não retorna nenhum valor, o tipo de retorno é void.

function imprimirMensagem(mensagem: string): void {
    console.log(mensagem);
  }


// Unknown: usado quando o tipo de uma variável não é conhecido até o tempo de execução.  Ele é um tipo mais seguro do que any, pois a maioria das operações não podem ser realizadas em uma variável unknown sem antes verificar seu tipo.

let x: unknown;

x = 10;
x = 'hello';

// É necessário verificar o tipo antes de realizar operações

if (typeof x === 'string') {
  console.log(x.toUpperCase());
}


// Never: usado para indicar que uma função nunca retorna um valor.

function throwError(message: string): never {
    throw new Error(message);
  }

// Neste caso, a função throwError nunca retorna um valor, pois sempre lança uma exceção com a mensagem especificada.