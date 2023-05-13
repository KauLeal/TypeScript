// No Typescript, é possível combinar tipos usando o type union e o type intersection.

// Union: permite que um valor possa ser de um ou mais tipos diferentes.

let value: string | number;
value = "hello";
value = 42;


// Intersection: permite combinar dois ou mais tipos em um único tipo que contém todas as propriedades e métodos de ambos.

interface Usuario {
    nome: string;
    idade: number;
  }
  
  interface Admin {
    adminLevel: number;
  }
  
  type SuperUsuario = Usuario & Admin;
  
  let user: SuperUsuario = {
    nome: "João",
    idade: 28,
    adminLevel: 1,
  };


// Type Aliases: permite criar um novo nome para um tipo.

type Nome = string;
type Idade = number;
type User = { name: Nome; age: Idade };

const user1: User = { name: 'John', age: 30 };