import assert from 'node:assert/strict';
import { mediaNotas, qtdVotos, avaliacaoFilmes } from '../src/avaliacaoFilmes.js';

describe('Avaliação de filmes', function () {
    describe('Média das Notas', function () {
        it('CT01 deve calcular a média das avaliações do filme', function () {
            assert.strictEqual(mediaNotas([5, 4, 4, 4, 5]), 4.4);
        });

        it('CT02 deve calcular uma média inteira', function () {
            assert.strictEqual(mediaNotas([1, 2, 3]), 2);
        });

        it('CT03 deve retornar a própria nota quando houver uma avaliação', function () {
            assert.strictEqual(mediaNotas([5]), 5);
        });
    });


    describe('Avaliações', function () {
        it('CT01 deve recomendar o filme quando a média for maior que quatro', function () {
            assert.strictEqual(avaliacaoFilmes(4.4), 'Filme recomendado');
        });

        it('CT02 deve classificar como razoável quando a média for exatamente três', function () {
            assert.strictEqual(avaliacaoFilmes(3), 'Filme razoável');
        });

        it('CT03 deve classificar como ruim quando a média for menor que três', function () {
            assert.strictEqual(avaliacaoFilmes(2.99), 'Filme ruim');
        });
    });

    it('CT01 no filme "Minha mãe é uma peça", 5 pessoas votaram e a média das notas é 4,4', function () {
        const avaliacoes = [5, 4, 4, 4, 5];

        assert.strictEqual(qtdVotos(avaliacoes), 5);
        assert.strictEqual(mediaNotas(avaliacoes), 4.4);
    });

    it('CT02 no filme "Saneamento Básico", 5 pessoas votaram e a média das notas é 3,2', function () {
        const avaliacoes = [3, 4, 2, 3, 4];

        assert.strictEqual(qtdVotos(avaliacoes), 5);
        assert.strictEqual(mediaNotas(avaliacoes), 3.2);
    });

    it('CT03 no filme "Se eu fosse você", 3 pessoas votaram e a média das notas é 2', function () {
        const avaliacoes = [1, 2, 3];

        assert.strictEqual(qtdVotos(avaliacoes), 3);
        assert.strictEqual(mediaNotas(avaliacoes), 2);
    });
});
