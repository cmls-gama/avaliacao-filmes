const Filmes = [
    {
        nome: 'Minha mãe é uma peça',
        avaliacoes: [5, 4, 4, 4, 5]
    },

    {
        nome: 'Saneamento Básico',
        avaliacoes: [3, 4, 2, 3, 4]
    },

    {
        nome: 'Se eu fosse você',
        avaliacoes: [1, 2, 3]
    }
]


export function mediaNotas(avaliacoes) {
    let somaNotas = 0;

    for (let i = 0; i < avaliacoes.length; i++) {
        somaNotas += avaliacoes[i];
    }

    const media = somaNotas / avaliacoes.length;

    return media;
}

export function qtdVotos(avaliacoes) {
    return avaliacoes.length;
}

export function avaliacaoFilmes(media) {
    if (media >= 4) {
        return "Filme recomendado";
    } else if (media >= 3 && media < 4) {
        return "Filme razoável";
    } else {
        return "Filme ruim";
    }
}