/* Crie um sistema que pede para o usuário escolher uma fruta, depois
mostre o preço da que fruta seja por quilo ou o que seja (unidade, bandeja,
etc.), depois pergunte quantas unidades ele quer e por fim mostre o valor
total
*/

const prompt = require('prompt-sync')()

console.log(`
    + ++++++++++++++++++++++++++++++++++++++++++ +
    +     [ATENÇÃO] PARA MAÇÃ USE --> MACA       +
    + ++++++++++++++++++++++++++++++++++++++++++ +
    `)
let frutas = prompt('Digite a fruta que você deseja: ')

