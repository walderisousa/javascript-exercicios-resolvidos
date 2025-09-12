/*Exercício 3
Elabore um algoritmo que pergunte o valor de um emprestimo e calcule o valor final
bem como o valor de cada parcela e mostre na tela;
*/

const prompt = require('prompt-sync')()

let valor
let parcelas
let juros
let total
let tempo
let juros_total

valor = parseFloat(prompt(`Digite o valor do seu empréstimo: `))
tempo = parseInt(prompt(`Digite o número de parcelas que você escolheu pagar: `))
juros = parseFloat(prompt(`Agora, digite qual o juros que o banco estabeleceu por mês: `))
juros = juros / 100
juros = juros * valor
juros_total = juros * tempo
total = valor + juros_total
parcelas = total / tempo

console.log(`
Você pagará ao final do seu empréstimo: R$` + total.toFixed(2) + `, sendo que serão ` + tempo + `
parcelas de R$` + parcelas.toFixed(2))
