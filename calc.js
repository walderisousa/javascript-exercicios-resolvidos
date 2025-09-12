//Execício 2

const prompt = require('prompt-sync')()

let result
let nome_operacao
let numero1
let numero2
let result_final

let opr = prompt(`Digite a operação que você deseja realizar. Use + - * ou /: `)

switch(opr){
    case '+':
        nome_operacao = 'adição'
        numero1 = parseFloat(prompt(`Digite o primeiro número da sua soma: `))
        numero2 = parseFloat(prompt(`Agora, o outro número: `))
        result = numero1 + numero2
    break;

    case '-':
        nome_operacao = 'subtração'
        numero1 = parseFloat(prompt(`Digite o primeiro número da sua subtração: `))
        numero2 = parseFloat(prompt(`Agora, o outro número: `))
        result = numero1 - numero2
    break;

    case 'x':
        nome_operacao = 'multiplicação'
        numero1 = parseFloat(prompt(`Digite o primeiro número da sua multiplicação: `))
        numero2 = parseFloat(prompt(`Agora, digite o outro número: `))
        result = numero1 * numero2
    break;

    case '/':
        nome_operacao = 'divisão'
        numero1 = parseFloat(prompt(`Digite o primeiro número da sua divisão: `))
        numero2 = parseFloat(prompt(`Agora, digite o outro número: `))
        result = numero1 / numero2
    break;
    default:
        console.log('Número ou operação inválidos.')
}
if(nome_operacao === 'divisão' && numero2 === 0){
    console.log(`
Não é possível dividir por zero`)
} else if (result_final.length >= 8){
    result_final = result
    console.log(`
O resultado da sua ${nome_operacao} é ${result_final}.
`)
    }else {
    console.log(`
O resultado da sua ${nome_operacao} é ${result_final}.
`)
}

