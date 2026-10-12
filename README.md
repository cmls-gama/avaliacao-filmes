# Avaliação de filmes

Projeto do exercício 5 de lógica e programação com JavaScript da Mentoria 2.0 em Testes de Software. Calcula a média das notas, conta os votos e classifica filmes de acordo com a média.

## Tecnologias

- Node.js e JavaScript com módulos ES (`import` e `export`).
- Mocha para executar os testes.
- `node:assert/strict` para validar os resultados.

## Estrutura

```text
src/avaliacaoFilmes.js        # Dados dos filmes e funções de avaliação
test/avaliacaoFilmes.test.js  # Testes automatizados
package.json                 # Dependências e comando de testes
```

## Funções

| Função | Entrada | Resultado |
| --- | --- | --- |
| `mediaNotas(avaliacoes)` | Array de notas numéricas | Média aritmética das notas |
| `qtdVotos(avaliacoes)` | Array de avaliações | Quantidade de avaliações, considerando um voto por elemento |
| `avaliacaoFilmes(media)` | Média das notas | Classificação do filme |

A classificação segue estas regras:

| Média | Classificação |
| --- | --- |
| Maior ou igual a 4 | Filme recomendado |
| Maior ou igual a 3 e menor que 4 | Filme razoável |
| Menor que 3 | Filme ruim |

As funções não validam as entradas. Para calcular a média, forneça um array não vazio de números; um array vazio retorna `NaN`. A lista `Filmes` está declarada no arquivo de código, mas não é exportada.

## Filmes do exercício

| Filme | Notas | Quantidade de votos | Média | Classificação |
| --- | --- | --- | --- | --- |
| Minha mãe é uma peça | 5, 4, 4, 4, 5 | 5 | 4,4 | Filme recomendado |
| Saneamento Básico | 3, 4, 2, 3, 4 | 5 | 3,2 | Filme razoável |
| Se eu fosse você | 1, 2, 3 | 3 | 2 | Filme ruim |

## Instalação e execução dos testes

Com Node.js e npm instalados, execute na pasta do projeto:

```bash
npm install
npm test
```

O comando `npm test` executa o Mocha. No PowerShell, também é possível usar `npm.cmd install` e `npm.cmd test`.

## Testes atuais

O arquivo de testes contém 9 casos:

- 3 para calcular a média: resultado decimal, resultado inteiro e uma única avaliação.
- 3 para classificar o filme: média 4,4 (recomendado), 3 (razoável) e 2,99 (ruim).
- 3 para verificar a quantidade de votos e a média de cada filme do exercício.

As descrições dos testes dos filmes aparecem na saída do Mocha:

```text
✔ CT01 no filme "Minha mãe é uma peça", 5 pessoas votaram e a média das notas é 4,4
✔ CT02 no filme "Saneamento Básico", 5 pessoas votaram e a média das notas é 3,2
✔ CT03 no filme "Se eu fosse você", 3 pessoas votaram e a média das notas é 2
```

## Exemplo de uso

```javascript
import { mediaNotas, qtdVotos, avaliacaoFilmes } from './src/avaliacaoFilmes.js';

const avaliacoes = [5, 4, 4, 4, 5];
const media = mediaNotas(avaliacoes);

console.log(`Pessoas que votaram: ${qtdVotos(avaliacoes)}`); // 5
console.log(`Média das notas: ${media}`); // 4.4
console.log(avaliacaoFilmes(media)); // Filme recomendado
```
