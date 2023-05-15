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
- [Média de Alunos](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgIIBsCuID2yDeAUMsrgLYQBcyAzmFKAOYDcxpOYcN1ImZARtADaAXVYBfQoQQ4QdZHCy5uaJTlHIAvMiFt87CtQBEGALcJgcIwBp2nFUIDsAOgCstgBzOADLYCcPrYuriLI4tZ6BlTIRgDScABfNnZc1EIAbG5BgchevsjBoeGR5NFGAKIAXhAAjpjAEOjJuPZpAe65OS75XiFhhGJSAPQAVCPEI8gAYtgA5wDHeFAQNAAOsjQAhwBujcjrUAoAJsAWsnCHfOzbeIrYt7dQUHAAnsgA5HfK7xNDhDDYBBgYCyY6nEEgC4Ye4ACgAlNQbsAjgQ2EMhsgAMo4dDgzjIPClZBHW5qBR4TA0TCbBh4FAyEC7KCQfYXODIdAQehcZBkODABI0BCYdBcNgM+Slah0BggRhafZQHBkVZgGFGAAiwEYwBZhOVKBJCjUlCMcIA-M4wDgAKqrVbQADCXAg8NYaIxjoY7KuF2eb22cEqINZzwUUD51Uhhx5LR5Rq+OHFGzAKRUvAEwlC2lE7pI6KxOLx7J5ABY08TSfdkCgeXATmdIeTw-6PnGaD8SDAcIcYZzU8AFQBGZjIQcAHm0pdHwAA1LO4aiSCQJam4zw+IJDtpVhcaBApugcHA1aslSq1QADLU6lnsuPIAAk+GA4krxvulEvcLhrGXaecVZKQACxhONfzYSQPWQL1LGQK4cH4AArLk8E+NR3mQGQyAUGhFRwM8GiOesVjbA1MJQd52wogkwUbEtHlbdD7g7ZM5FTRNqGhXAFSIf9SgifiODFEhxD-D9lEAkCYUTCCoILAAFaBGGwfE4ApKkaRDfdiRWCAkPZbZgCpRRgEqC5cIrI4UF9MkIAAD2MyBwBQHBMDoiELKuXAbgkpN+2QIyTNxcyoAAOWE9NN2gBVdygfcAElwBhM9lVVdUNT0gzAuMzBTNCyz210+CcMTZAYSHRc3I885Lhwnyqx4mFvAtM0IMIAsADVoGAGBThLAlVgWOkhRxYDkXZB0j3gzTaUIXryqCvKQouCL7C0TRtEqpdkALZ0aDwDTqVpZA6ggYAwyW-KLNjSLits6sHKciAXLYyUDW4nBpXoJhYvPdLNW1XVXKid8yvZfdDglEVOBJU0LStW17SdF03SkfMMQUpVhTDRr9RbV4PkTDt9kafUKDYALE3KEAGW5OHVGrAAfeCQGsvqQAgFFtGwdnQC58Tu17Vc-IJGA-JoRc+OXBaZLUZwiU27RSk+qW2H-anadkem8G0RNxP-fhljgABrA3+lE9HdoxcpHMEQq7pQMgAEuTnZBM7K18BnhJWxqr4dkKDkOBGAgHDrNFkBFhrL2dbYWXNbpn2cDV-8JRxCBnCPRh1TW+M8ZiZBZz8mmk-rHAFYNIuYnh83085LOcBzow8+QIdjGrxPteTyv7CEbwRAgtONgzxvm9bgAmDvi6773y97rghCHQe65Hhvs9z4TkAAZmnkvY579shAnlf1awtfM43lut9LPfZ51heaCEbfT7PkWKDdjdM23M+SHvw-IrOGWEcTASAYQwmtJwdAthwJaAAHzIEgYoaucZbAtV2r-feZcSSPyzi9RgYBgJ5mXPXS+Td1QAFlXaWD3h-SwiMpjAHslzGEE8fziTfI0HS0sVwXzHuqT6pBo4vWwRXM0HDCCcPQDpWWV0VrhTukrZA6DpZ7S4IdGax0QxnQuiWBsnk6rXDxmwes4JaqfTRrwuQo8N7EzkjWaRKBpakP4UYAA8kNaOoBtibFxMRM0kigA)
- [Cálculo de Renda](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgAoQM4YPZ2QbwChlkRsBbCALmQzClAHMBuY2uAGzgexpAFdyAI2isSGTt2DYAMsACO-YABNepQSKisAvoUIJsIOsgAOmHHAw10WXAG0AusgC8yR6z0B6T8gBi-EABzgGPsZChME0MMAEOANwgOU2woZDhlYARpEG5kQTwzWzw4MO4oOABPZAByQosMauJCGACEMGy0jKzDbhsLAAoASho47BUCNm9kAGVsDkzgMDwwskpkZQLzXDSw-gx+GJ42AyMwUgpqWnomF1MoChMwfoAiABFgRkWUFYv1zaKqM9Bh4SFNZvMsktkGEJBxDtI-qYtsVdvt4WEUCcElBIKZuHgQAAvyj3Y7RM6wqRqATCaC3EzcDAQXwcXBPEz3ciPF7vT64mGcdGIuq4QGDYF6UE+ADCnAQ-C40PYcJ4yA4AFvFCowhskUU8u15gAvOAgVRpZAtIKhZAIOUK7gAJQgZrgci1GyGZNOyqp7qUqj4GjprjtHHlXCgztd-pUcH6lJ4EsmMoYeEE0KEACsIGAwrVkdVbRQ0hg7tgOcAIBtlJgaqsINUADQ1RPSIsoapt2QKAPYDtK9ILHo7NJQcpVAtFBre4wiuDWZG3IgkEgNptscSSHgb1e+nix1RsbQgvX1AB0Jj2AAt+vOJbovJ5-NawhEMFEjPFEslUmGI7keARK6aqagGxR4jiwCpOasLok0VptB0-4OlGLobIe8bdkGtJQMM6i4RMJAnMYtYYCceY4ZotwACwAAx0WI4S5vwUAgPuCIALTrJgFHYDoT7IDI2AVncoBZAySQMuUxbgKA-C5GYUCMAESxmqUqIHKqTI8UyWZ4Ni0L8J0w45Kk+RnrghAAO7XsAHAoP09D8BAgxEcgYJzAsUIlHkaKqssJghDqmAQPpur9IZ2DGUO3RmXk5D-BYgyzmcFZ2tSwapK40lMgAkuAd6ctybyhfpyCGf0ACMbnRSZcW5P0dFuRZ84APxAsmJDADAyD9OlvnOENyA1e5UrIAA8kFNpMg5DUbDQABqdKtcikqrp5EKLCiflaQiPxrLq84Wkyf7RAqSwbJusnGA2fSilcDAgIw9LFU8bwfF8SoNsKS54KdN0XekC5Aqe42oPc8oyUl2xkGOE41PODRIqy5xrPwhrACa6lKuQACXebmjAoDKF6e4kWc84AKIgBR5QLWgS4AD55GaEDEyA1b0siGDnhzpN3sibnOAAfJZcDnj9Q2uHdQtg8gPV9dTtOGPQwNuSue4eT40woDDeAwCkyAunTwMthAAAewAiLQCllqAhtQIlgQAK91v067KkKKBwaqGoetgblwyRcwQNdxHRKH56sowLwAHIXDQzzIAA1OLNOmxsksXBKWs3VHMcvNMgo8Enqfpyr4D0xL3a51rIcOdH2Cx88xcqgiMhgdqZdp8rmc19u0iHoHTEkNoxscDpmt7mCevi6QNqO8bldqxs5tWzbFmUEYcCMBA5AKyAjuJTjihz8dICL2My-9+H+eN4Xzz3QSNom6r1fnqD126GPE86Yr-UTAZRcMNZqY1taTWmjCRIEB5oLmQAAQS6NkXIq0ijrXGtKa8cBEoWitMFeqKCoDPyGJBYoyCejmVwWQOI+tRxlEqIjHmjQ9yxSISQuu49EhT2ulMKaBDQBxBiPMK65NI4P2bi8fhNpBHCLjJ-Th60pjoGUqpHaew9rQN0mFPAFF5KNSqsgbi0xgDkBbHRIxyA46hBShHH0eiBDcCoiGSC+VCocgeO9V4ZVdGq30VANqfVDHGNMeYyx1jA6dSYgAhxClsqgI1tdIQEQ4AAGsmK6EfA3CATdY5IwlEAA)

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
