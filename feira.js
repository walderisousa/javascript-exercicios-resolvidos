/* Crie um sistema que pede para o usuário escolher uma fruta, depois
mostre o preço da que fruta seja por quilo ou o que seja (unidade, bandeja,
etc.), depois pergunte quantas unidades ele quer e por fim mostre o valor
total
*/
const prompt = require('prompt-sync')();

let peso_fruta
let preco_fruta
let preco_total
let peso_total
let fruta
let qtd
let frutas

const preco = {
    maca: 6.20,
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
    +     [ATENÇÃO] NÃO É POSSÍVEL UTILIZAR Ç    +
    +               NEM ACENTOS, SENDO ASSIM:    +
    +                                            +
    +               PARA MAÇÃ USE --> MACA       +
    +               PARA MAMÃO USE --> MAMAO     +
    +               PARA MELÃO USE --> MELAO     +
    + ++++++++++++++++++++++++++++++++++++++++++ +
    `);

frutas = prompt('Digite a fruta que você deseja: ')

switch(frutas.toLowerCase()) {
    case 'maca':
        fruta = 'maçã'
        console.log(`
O preço da ${fruta} está R$` + preco.maca.toFixed(2) + '/Kg')
        qtd = parseInt(prompt(`
Quantas unidades de ${fruta} você quer? Digite apenas o número: `))
        peso_fruta = peso.maca
        preco_fruta = preco.maca
        peso_total = peso_fruta * qtd
        preco_total = preco_fruta * peso_total
        break;

    case 'banana':

        console.log(`
O preço da banana está R$` + preco.banana + '/Kg')


    default:
        console.log(`
Fruta não encontrada ou em falta no estoque.`)
}


console.log(`
O preço total ficou R$` + preco_total.toFixed(2) + `
`)

