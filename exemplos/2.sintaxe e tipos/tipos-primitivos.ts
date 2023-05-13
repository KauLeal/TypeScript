// O TypeScript oferece suporte aos tipos de dados primitivos do JavaScript, além de fornecer alguns tipos adicionais. Os tipos primitivos suportados pelo TypeScript incluem:

// number: representa números inteiros e flutuantes.

let ano_de_nascimento: number = 1995
let salario: number = 2445.90

// string: representa uma cadeia de caracteres.

let nome_completo: string = "João da Silva Lima"
let cumprimente: string = `Olá, ${nome_completo}!`

// boolean: representa um valor verdadeiro/falso.

let noite: boolean = true;
let dia: boolean = false;

// null e undefined: representam valores nulos ou indefinidos.

let media: null = null;
let nota: undefined = undefined;

// void: representa o valor de retorno de funções que não retornam valores. 

function noop() {
    return;
  }

// bigint: representa valores inteiros grandes que ultrapassam o limite de Number.MAX_SAFE_INTEGER.

let bigIntValor: bigint = 9007199254740991n



