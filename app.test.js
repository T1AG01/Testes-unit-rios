let calcular = require('./app');

describe('Funções de calculo', function (){
    test('Calcular a média entre 2 números', function(){
        expect(calcular.somar(5,15).toBe(20));


    });
    test('Calcular a soma entre 2 números', function(){
        expect(calcular.media(20,10).toBe(15));

    })

})