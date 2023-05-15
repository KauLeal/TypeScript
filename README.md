# TypeScript

<p align="center">
<img src="/screenshots/typescript.png"   width="200">
</p>

> TypeScript é uma linguagem de programação de código aberto que foi criada em 2012 pela Microsoft como uma extensão do JavaScript. O TypeScript adiciona recursos ao JavaScript, como tipagem estática, classes, interfaces e outros recursos orientados a objetos, tornando-o mais robusto, escalável e fácil de manter.

> O TypeScript é compatível com o JavaScript existente e pode ser usado em qualquer aplicativo JavaScript. Ele é compilado em JavaScript legível para o navegador ou para qualquer ambiente JavaScript. Isso significa que os desenvolvedores podem usar as bibliotecas e estruturas de código JavaScript existentes, como Angular, React e Vue, com o TypeScript.

## Características Gerais

- Tipagem estática
- Inferência de tipos
- Suporte a orientação a objetos
- Compatibilidade com JavaScript
- Suporte a módulos e namespaces
- Compilação e transpilação para Javascript

*******

## 🚀 Instalando o TypeScript

Para instalar o TypeScript, siga estas etapas:

### Usando o npm (Node Package Manager)

Certifique-se de que o Node.js está instalado em seu computador. Caso não esteja, você pode baixá-lo no site oficial [clicando aqui](https://nodejs.org/).

No canto superior, clique em "Downloads" e escolha o arquivo de download de acordo com o seu sistema operacional, conforme na imagem abaixo:

![instalacao do node.js](/screenshots/node-download.png)

### Windows

- Abra o "Prompt de Comando" ou o "Windows PowerShell".
- Execute o seguinte comando para instalar o TypeScript globalmente:

  `npm install -g typescript`

### Linux e Mac

- Abra o terminal.
- Execute o seguinte comando para instalar o TypeScript globalmente:

  `sudo npm install -g typescript`

Após a instalação, você pode verificar se o TypeScript está instalado corretamente executando o comando `tsc -v` em um terminal. Isso deve exibir a versão do TypeScript instalada em seu computador.

*******

## Visual Studio Code

Para criar e editar códigos em Typescript, nossa recomendação é o Visual Studio Code. Você pode baixá-lo [clicando aqui](https://code.visualstudio.com/).

![vs code image](/screenshots/vs-code.png)

Depois de instalado, para iniciar um projeto TypeScript no Visual Studio Code, siga os seguintes passos:

- Abra o Visual Studio Code.
- Crie uma nova pasta para o projeto.
- Abra a pasta no Visual Studio Code usando o comando "Open Folder" no menu "File".
- Crie um novo arquivo TypeScript na pasta usando o comando "New File" no menu "File".
- Salve o arquivo com a extensão `.ts`.
- O Visual Studio Code irá sugerir a instalação do TypeScript caso ele ainda não esteja instalado. Clique em "Install" para instalar o TypeScript.
- Abra o terminal no Visual Studio Code usando o menu "Terminal".
- No terminal, execute o comando `tsc --init` para gerar o arquivo de configuração 'tsconfig.json'.
- Abra o arquivo 'tsconfig.json' gerado e configure as opções de acordo com as necessidades do projeto.
- Escreva o código TypeScript no arquivo criado e salve-o.

##### Compilando e executando o código

- Para compilar o código TypeScript em JavaScript, execute o comando `tsc nome-do-arquivo.ts` no terminal, ou simplesmente use o atalho Ctrl + Shift + B para compilar todos os arquivos TypeScript do projeto.
- Para executar o arquivo em Javascript, execute o comando `node nome-do-arquivo.js` no terminal.

## TS Playground

O TypeScript Playground é uma ferramenta online que permite experimentar o TypeScript de maneira fácil e rápida, sem precisar instalar o TypeScript no seu computador.

![ts playground image](/screenshots/ts-playground-image.png)

Para utilizá-lo, siga os seguintes passos:

- Abra o navegador e acesse o TypeScript Playground [clicando aqui](https://www.typescriptlang.org/play?#code/PTAEFEGdIU1BL0B7UAVAngBxgZQMYBOAlpgC6gAKANgIboDmBSArgHYAmAhAFAigCCAR2ZFQANyR4AV6ExJ2MAgEPQpGJFI0CySKDwBn9kXpJdNTAXUxWm9qdCwAtrMt4ikLaCKsNNWtpQAKRoxGnxiMlBWFDwkR0xmWyQCbl4wADUaR3tYxxgAc89sKhQAIyVIIliALlAYAA8YPESaDhRmZwAJGCoS0AB1ZKp2bioYcjyfGnoYR1qNYlZ6UABeUAAibt6UQYJhznXuWJ8kMYA6EvoACkmPGccASlS+AHk0LFxCEnI5aBFQDoOdxqRw0UAKLysABmiikrDcYIhpBI9m8aioxmsagANMhQMI4JV6KwiFCqmCCVFZg5ZhY4PA0lS8OpIEpiCh1Ng3GS8J4UMi5OC4OwaHYhQDQeItEQlGIenV6pgMW5NJM1M8wAAZJAmXEsUgEMFQ5KSiENJotbSArZ9XbDBDVI5IE7nS5XTY9W1DLjrJ6MgCTDn0emVnmpACU2KA-KJqW5JXAwbdptTYMoFURSkQRVEwTRSmDtfRdNFZDRvPKAAfgoiWIiaUAAWgAfEA).
- Na área central da página, você verá dois painéis: um painel para digitar código TypeScript e um painel para ver o resultado da compilação
- Digite seu código TypeScript no painel central (do lado esquerdo)
- Clique no botão "Run" (ou pressione Ctrl + Enter) para compilar e executar o código.
- O resultado da compilação será exibido no painel da direita. Se houver erros de compilação, eles serão destacados em vermelho.

### Códigos de Teste
Clique nos links abaixo para poder acompanhar a execução dos códigos no Playground

- [Função de Cálculo](https://www.typescriptlang.org/play?#code/PTAEDkFMGcBdNJAHpAtgBwDYHsA0oBDUAMwFcA7Ac4GPtQBjAze0zAgJ1HcnsgCMEAE2wBLaKABuTbN3HDQsEejrlSqAZwRqicdiPIBzUAEdSCbulmRysIkWzpI7AjTo6nXSExEAvAoIIAOgAoEDAAQVhnCQBLuSIYKNJYUmdQQQR6bBt2bEwEaAB3EVh6AAt8IjIqWk9vP0JQBycXWozoSAArfwTPWBlye09oVlthELDQAGECaDcmx2dXUHRZ6B6GbFQ6VfYAI9RIKJVaju7QbXTZhcoAV5hJAEPMEQDoSpIKZbYqIkvkXjLAhRAixOR0LKoAjkeSwMq5QohYLVeiKbIMJgsNjsAAUAEoAFygVTqDwAb2CoE25Dgkmk7AAjKAALwQNQaHGWLboWA4gBEABERAYSggdnpDiJcnScOwiXy8XiANyU6m0qSygBMLLZpNxXIwvMFwtFTVAHQMFHkGpk8sVKqpWRpsAWLUYdFZBp5-KFIvgjWaSzaMC6Gxxcyh+BGfHwqFGTVI6REEkJoAVDtAqqKJXKoBxgYI7rxoApVMdswQfIjBD5BNVZb6qXIMpkTIA1C32JqM+WOmno7X62XuCl2M2bYzQABaTvdoeMPt8uOYWCDhtUkdNztMgBUs57GMXgmTa-Xm7H29AYAnc4bGWIBFGdfXCnh2EKxMgH4Aouxcri+QAeUWVo6H0CRnleAgAEJ01VABfYJEOCJ05nyQIcAMHFGGYVgOHxZUgA)
- [Imprimir Dados](https://www.typescriptlang.org/play?#code/PQKgUAcgpgzjUAIoA8oFsAOAbA9gGgQGMAnASwEM0cYEBXNchUgOwBcpiAzcwxABVgwcjQjjQJWxAFc0MxHHNJQAJuWWwAXAmZjEAChiSWAcwCUBUqvUI9zegCMOppEUtr9hsszMA6MAFFxeGNaNwISCioaekZOWmYAc4BjnCZMMjRSYgARNWoEAEdaRGIoXkc6cQxyYgAjtChJVOVU1lIMVIE4YRdSdL7EchoWThxiBgSAV9gEdThGDEEenSIcZiEsKD8QYDAwFnYuHn4lxgBvMARtXS1PEwBuS6YrKC07NEdiR6vCN3VbozeR4AXz2cWYhDaazSikyOTyMD0i265C0XSE5GcFx+aw2W1wxj0AAMIDcEAASM7IjE+HQNYFE0zfVbrHCbHwE4kASReWkp1OEPj+UAZTKeolZ7M5RIAwsK+VTTj5fi9RSC9gB3AAWpE2NkkxSx4txrAQpRgHUMjAAvAg5GIMKw9AAibKwKAAK0YLHgZGIlQWpwA-DYAMoIW0wPoIYAICARuMpUzOpkx2MCYghNiMcipWgwWgAQ7IqXgSD1RQ4THWHCyAbtpyepE4NgAhObLaxGAAfbtm2Cd8g+Vg4AAyOA1HBlQygemc1oXCGdzBTCDOaYQAHkEK2EAA3WucUiERhljvULsIACX2loWEYOFo1fUR+Ybh8CGnQgQ8C9eCeVz2KU5AANb3FcEGQVB0EwbBsHALGj4IHmBbFqQzSkMYpDsEuK4EKkhAAM-KJhqQYMWQ5PMC5Zls2Njnlaw5jhOU4znOO6Ls6MCruu0EIZ+QypChRYlrMmHYYgXHOvhRDEaRLJtHYlGQRKinFMyoLGuspp0ogtr2pgTquuJOGpLpsyBiiGgpuBVz8TKZA5iyVpsIg5kLDUbT+i0+7kLg3kmXkDa4HQqEln4Vx0Xora6VicHxQlcH2VqZSnm5ujXre97IU+LAviwbgAQpLDqVRexXJspryreHwcLZiUNXxsYORQCCMHuNSkIWB5YM87g2PmlD5DEvlkN1UC9R0pA0BNaXEIWCAMG+GB3mojArLgCimE82q6voBpQEaKkmn16ihpICYGY6LrZCZgynYgqgNlZNlFcKl01PAXJsHowrnf6vZLgADNJCAAIxA6m8X8QAKsQ5DrKM4zei8syIHc3h2jU3quVkeZtFgpAAF4Iz5jD2DO4NAxFEFRdNEDkBAv0vKYcWNez9mCchoUiehYlYThfnGBhnAcFArlo5U1bsHjeCpJtGD9gVvzKVBqklVA9Xs9rkGc9+hCE5WSDiM6J4QrNxCg+9voLSgpD2G4qxUMDzpFaCkFAVAoEaeVzmmiq-X6fIhk3XdbWuKjT0Cqiq6A66sASilAfOuBetCTzaEEYbxTG0uZu8Pelv-jrJel6X-EiNbHC28g9uO6IzvOnMidlG4zp+FphjPRiaKnAmZy6RYLzhMKwJa3ZzWOdzOD2B6jRkX3HnEF5Fk0BKLnsDQM9tKoMBNv0cK5C0iLR1DZcwcllBOeCySpFyB9ZEf1BgMCQA)
- [Imprimir Dados 2](https://www.typescriptlang.org/play?#code/PQKgUAcgpgzjUAIoA8oFsAOAbA9gGgQGMAnASwEM0cYEBXNcorcuRABVhh0cJzQQAuxAFc0MxHONJQAJuRmwAXAgB2fRAAoYQ0ioDmASgKk5ChBpX0ARlGIGkRE-M3ay+gwDowAUX7w9tE4EJBRUNPREOCqutIQCCBjkxIxQzB4I3liI8MQAhwjEsBhRMLkAbqkJOMQFUIRQNjXUCGXkuIU0MqR6pALyzRipOHQwtLlkOGCJyQhUKn1NCDhWAFZQAsODxAJQKvXziClwPMysXiDAYGCEpzQccNwIAN5gCKrqyq66egDcrwhOBTKSxoRp-N6EQFQT46fR-f68aJCWIbYgWD4IL76YymaGqay2YJQmFuQzPf5vAQAC1IMA8ajQiAAvO9GeC3oIaXSoQgWVD2ZSuR5IbjeY5ceyAL5gaXXErxQYPFjKe5ccgAbQAumKtT8OW9gMAEABJohkfpLBBJZIATwQAEdaNlbPlSJgyGgTMM1AgAGa6NoIGTDQgAZ66emGYSE5BUwcEOGDNGayzWGxgVyy8XkpEhUSSqseLORUD1+oNRoAaklSOVKiF5IxpowGAdFgB3GlZK0CUhlYbkAQAS4dTqDUFIqHHmNsgmITqundI3Y0ObzKgLnG49hebyzrLxWL0CAAPvisFgxZYL2WOYaTXRe1hSAAvC3DM-Ns0UGr0Ri6HZiHgQgAHOAGP8ASWxPV7ONhkdQ4aDKcZawqWkrTgP9+GDWl-n3Yl8VBWcz2vS8WVI28EHvXtik6UhfVsXYdhgElvmAEFGgcUj0lNXRcwoZ83zkSIqHPLAvD3dZxWcVj9FPMSr1oG8rjeJcVwAQgZKAd3LXS9P0gzDP1e8AGEqTqRh4APBAR2vRgcFoFpyBfCgKWsllxD4DABA0AAiAARbpekQb11CDJst3IRRfPsAB+WKEAC2BEXMkUcF8st7wAeQQeLzEkWx+hqMxeDaZLhD2Chz3IewcAYwp6jofhWnaBJ5GICD-klIyet6vrevvQgWGGYYWuqP1qhUOovRnFZGGvHAvH+NTNHUqEdzcxFtABXEAGVYWPDyJEwHyAqCnYrR25xwqgpVooMW97wgENhqDYZhKhAhRracaVAgqoFDyGcagWqpcP1Lb4ihCACRqFkYaItEoX20kHv64yjRgUNR0YsIrXqXoklUAAvxkJDpBBoFYIhXr+4ZaBgSgUzaoCoAASXmNz0e5nn9PvYp0MYVoyDrS8+lBId+GKMwcgUxBaS4GmGZrFJiAkJb9Xo8xaQgcgIA0aHYYMDbdLK7Y-IAQSuswFAqYGmpJsnRtyZ9g3UmKBQQbrUis3c9J5PlcQRsEuelN5ZVUrtVpFZwTY5GOzCOrzTsCnoLp4HlhMVNV7tyhKkpgFLprkDKupUyIkVutUrygdsEELch0UZHFnCJXE0Z60zzUtVN1kmf5s+4OkMAZqkNEHmrKLvI0OZyEKllWPv3itNXyBtcvIdqGBaL6MVx+O7y-P82AoDmq0unXImHJjKvuASjRduACADBivPEpijwNgAVQwLYTJYKAGg0bly1hoDoO9GBMigYlCAr8-ZvDXKQfMxAG5il9G0eAUokBYCsqA8B1Bd7qWgb5XacC3Jm1OgAJSKAQ-8KhkKu3IOkNg410H9mIAQCMwUEC7SWI5CAHgPZl1lFtHAWQPC4D0OPSKMAO5URnu6N089rRryAA)

## 🤝 Colaboradores

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
