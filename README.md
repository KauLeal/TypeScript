# TypeScript

TypeScript é uma linguagem de programação de código aberto que foi criada em 2012 pela Microsoft como uma extensão do JavaScript. O TypeScript adiciona recursos ao JavaScript, como tipagem estática, classes, interfaces e outros recursos orientados a objetos, tornando-o mais robusto, escalável e fácil de manter.

O TypeScript é compatível com o JavaScript existente e pode ser usado em qualquer aplicativo JavaScript. Ele é compilado em JavaScript legível para o navegador ou para qualquer ambiente JavaScript. Isso significa que os desenvolvedores podem usar as bibliotecas e estruturas de código JavaScript existentes, como Angular, React e Vue, com o TypeScript.

## Sumário da apresentação

I. Introdução
II. Histórico
III. Características gerais da linguagem
=> COMO FAZER A INSTALAÇÃO
IV. Sintaxe básica
V. Vantagens do TypeScript
VI. Conclusão
VII. Perguntas

## 🚀 Instalando o TypeScript

Para instalar o TypeScript, siga estas etapas:

### Usando o npm (Node Package Manager)

Certifique-se de que o Node.js está instalado em seu computador. Você pode baixar o Node.js no site oficial: https://nodejs.org/

### Windows

1. Abra o "Prompt de Comando" ou o "Windows PowerShell".</li>
2. Execute o seguinte comando para instalar o TypeScript globalmente:

npm install -g typescript

### Linux e Mac

<ol>
  <li>1. Abra o terminal.</li>
  <li>2. Execute o seguinte comando para instalar o TypeScript globalmente:</li>
</ol>

sudo npm install -g typescript

<p>Após a instalação, você pode verificar se o TypeScript está instalado corretamente executando o comando ‘tsc -v’ em um terminal. Isso deve exibir a versão do TypeScript instalada em seu computador.</p>

## Vs Code

Nossa recomendação de editor de texto é o Visual Studio Code. Você pode baixar através do seguinte link: https://code.visualstudio.com/

<p align="center"><img src=/screenshots/vs-code.png></p>

Depois de instalado, para iniciar um projeto TypeScript no Visual Studio Code, siga os seguintes passos:

<ol>
  <li>Abra o Visual Studio Code.</li>
  <li>Crie uma nova pasta para o projeto.</li>
  <li>Abra a pasta no Visual Studio Code usando o comando "Open Folder" no menu "File".</li>
  <li>Crie um novo arquivo TypeScript na pasta usando o comando "New File" no menu "File".</li>
  <li>Salve o arquivo com a extensão ".ts".</li>
  <li>O Visual Studio Code irá sugerir a instalação do TypeScript caso ele ,,,.ainda não esteja instalado. Clique em "Install" para instalar o TypeScript.</li>
  <li>Abra o terminal no Visual Studio Code usando o menu "Terminal".
  No terminal, execute o comando tsc --init para gerar o arquivo de configuração tsconfig.json.</li>
  <li>Abra o arquivo tsconfig.json gerado e configure as opções de acordo com as necessidades do projeto.</li>
  <li>Escreva o código TypeScript no arquivo criado e salve-o.</li>
  <li>Para compilar o código TypeScript em JavaScript, execute o comando ‘tsc 'nome-do-arquivo.ts' no terminal, ou simplesmente use o atalho Ctrl + Shift + B para compilar todos os arquivos TypeScript do projeto.</li>
  <li>Para executar o arquivo em Javascript, execute o comando ‘node 'nome-do-arquivo.js' no terminal.</li>
</ol>


### TS Playground

O TypeScript Playground é uma ferramenta online que permite experimentar o TypeScript de maneira fácil e rápida, sem precisar instalar o TypeScript no seu computador.

<p align="center"><img src=/screenshots/ts-playground></p>

Para utilizá-lo, siga os seguintes passos:

<ol>
<li>Abra o navegador e acesse o TypeScript Playground em https://www.typescriptlang.org/play/ </li>
<li>Na área central da página, você verá dois painéis: um painel para digitar código TypeScript e um painel para ver o resultado da compilação.
Digite seu código TypeScript no painel central (do lado esquerdo).
Clique no botão "Run" (ou pressione Ctrl + Enter) para compilar e executar o código.
O resultado da compilação será exibido no painel da direita. Se houver erros de compilação, eles serão destacados em vermelho.
</ol>


## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://ih1.redbubble.net/image.2774385448.6034/st,small,507x507-pad,600x600,f8f8f8.jpg" width="100px;" alt="Foto da Alícia"/><br>
        <sub>
          <b>Alícia</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://e7.pngegg.com/pngimages/946/947/png-clipart-anime-meme-manga-leafa-lolicon-anime-manga-chibi.png" width="100px;" alt="Foto do Ezequiel"/><br>
        <sub>
          <b>Ezequiel</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://miro.medium.com/max/360/0*1SkS3mSorArvY9kS.jpg" width="100px;" alt="Foto do Steve Jobs"/><br>
        <sub>
          <b>Kaú</b>
        </sub>
      </a>
    </td>
  </tr>
</table>