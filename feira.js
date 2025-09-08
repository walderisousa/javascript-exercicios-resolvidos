/* Crie um sistema que pede para o usuário escolher uma fruta, depois
mostre o preço da que fruta seja por quilo ou o que seja (unidade, bandeja,
etc.), depois pergunte quantas unidades ele quer e por fim mostre o valor
total
*/

const prompt = require('prompt-sync')()
const preco = {
    maçã: 6.20,
    banana: 5.20,
    laranja: 4.99,
    manga: 6.99,
    mamao: 7.50,
    melancia: 1.59,
    abacaxi: 3.99,
    pera: 10.99,
    uva: 10.99,
    melao: 2.99,
}

const peso = {
    maca: 0.150,
    banana: 0.100,
    laranja: 0.180,
    manga: 0.400,
    mamao: 0.350,
    melancia: 6.000,
    abacaxi: 1.500,
    pera: 0.160,
    uva: 1,
    melao: 1.700,
}

console.log(`
    + ++++++++++++++++++++++++++++++++++++++++++ +
    +     [ATENÇÃO] PARA MAÇÃ USE --> MACA       +
    +               PARA MAMÃO USE --> MAMAO     +
    +               PARA MELÃO USE --> MELAO     +
    + ++++++++++++++++++++++++++++++++++++++++++ +
    `);

let frutas = prompt('Digite a fruta que você deseja: ')

switch(frutas) {
    case 'maca':
        console.log('O preço da maçã está R$' + preco.maçã + '/Kg')
        break;

    default:
        console.log('Fruta não encontrada ou em falta no estoque.')
}
