/* Crie um sistema que pede para o usuário escolher uma fruta, depois
mostre o preço da que fruta seja por quilo ou o que seja (unidade, bandeja,
etc.), depois pergunte quantas unidades ele quer e por fim mostre o valor
total
*/

const prompt = require('prompt-sync')();

let preco_total, peso_total, qtd, frutas;

const preco = {
    maca: 6.19,
    banana: 5.19,
    laranja: 4.99,
    manga: 6.99,
    mamao: 7.49,
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
    melao: 1.700,
}

console.log(`
    + +++++++++++++++++++++++++++++++++++++++++++ +
    +  [ATENÇÃO] NÃO É POSSÍVEL UTILIZAR Ç        +
    +            NEM ACENTOS, SENDO ASSIM:        +
    +                                             +
    +            PARA MAÇÃ USE --> MACA           +
    +            PARA MAMÃO USE --> MAMAO         +
    +            PARA MELÃO USE --> MELAO         +
    +            PARA MELÂNCIA USE --> MELANCIA   +
    + +++++++++++++++++++++++++++++++++++++++++++ +
    `);

frutas = prompt('Digite a fruta que você deseja: ')

switch(frutas.toLowerCase()) {
    case 'maca':
        console.log(`
O preço da maçã está R$` + preco.maca.toFixed(2) + '/Kg')
        qtd = parseInt(prompt(`
Quantas maçãs você deseja? Digite apenas o número: `))
        peso_total = peso.maca * qtd
        preco_total = preco.maca * peso_total
        console.log(`
Peso total: ` + peso_total.toFixed(3) + `/Kg.`)
        prompt(`
Aperte ENTER para continuar. `)
        break;

    case 'banana':
        console.log(`
O preço da banana está R$` + preco.banana.toFixed(2) + '/Kg.')
        qtd = parseInt(prompt(`
Quantas você gostaria? Digite apenas o número: `))
        peso_total = peso.banana * qtd
        preco_total = preco.banana * peso_total
        console.log(`
Balança: ` + peso_total.toFixed(3) + `/Kg.`)
        break;

        case 'laranja':
        console.log(`
O preço da laranja está R$` + preco.laranja.toFixed(2) + `/Kg.`)
        qtd = parseInt(prompt(`
Quantas laranjas você quer? Digite apenas o número: `))
        peso_total = peso.banana * qtd
        preco_total = preco.banana * peso_total
        console.log(`
Peso total: ` + peso_total.toFixed(3) + `/Kg.`)
        prompt(`
Aperte ENTER para continuar. `)
        break;

        case 'manga':
            console.log(`
O preço da manga está R$` + preco.manga.toFixed(2) + `/Kg.`)
            qtd = parseInt(prompt(`
Quantas você deseja? Digite apenas o número: `))
            peso_total = peso.manga * qtd
            preco_total = preco.manga * peso_total
            console.log(`
Peso total: ` + peso_total.toFixed(3) + `/Kg.`)
            prompt(`
Aperte ENTER para continuar. `)
            break;

        case 'mamao':
            console.log(`
O preço do mamão está R$` + preco.mamao.toFixed(2) + `/Kg.`)
            qtd = parseInt(prompt(`
Quantas unidades você deseja? Digite apenas o número: `))
            peso_total = peso.mamao * qtd
            preco_total = preco.mamao * peso_total
            console.log(`
Peso total: ` + peso_total.toFixed(3) + `/Kg.`)
            prompt(`
Aperte ENTER para continuar. `)
            break;

        case 'melancia':
            console.log(`
O preço da melância está R$` + preco.melancia + `/Kg.`)
            qtd = parseInt(prompt(`
Quantas melâncias você deseja?`))
            peso_total = peso.melancia * qtd
            preco_total = preco.melancia * peso_total
            console.log(`
Peso total: ` + peso_total.toFixed(3) + `/Kg.`)
            prompt(`
Aperte ENTER para continuar. `)
            break;

        case 'abacaxi':
            console.log(`
O preço do abacaxi está R$` + preco.abacaxi.toFixed(2) + `Kg.`)
            qtd = parseInt(prompt(`
Quantas unidades você deseja? Digite apenas o número: `))
            peso_total = peso.abacaxi * qtd
            preco_total = preco.abacaxi * peso_total
            console.log(`
Peso total: ` + peso_total.toFixed(3) + `/Kg.`)
            prompt(`
Aperte ENTER para continuar. `)
            break;

        case 'pera':
            console.log(`
O preço da pera está R$` + preco.pera.toFixed(2) + `/Kg`)
            qtd = parseInt(prompt(`
Quantas unidades de pera você deseja? Digite apenas o número: `))
            peso_total = peso.pera * qtd
            preco_total = preco.pera * peso_total
            console.log(`
Peso total: ` + peso_total.toFixed(3) + `/Kg.`)
            prompt(`
Aperte ENTER para continuar. `)
            break;

        case 'uva':
            console.log(`
[AVISO] AS UVAS SÃO VENDIDAS POR BANDEJA.
O preço da bandeja da uva está R$` + preco.uva.toFixed(2) `.`)
            qtd = parseInt(prompt(`
Quantas bandejas você deseja? Digite apenas o número: `))
            preco_total = preco.uva * qtd
            break;

        case 'melao':
            console.log(`
O preço do melão está R$` + preco.melao + `/Kg.`)
            qtd = parent(prompt(`
Quantos melões você deseja? Digite apenas o número: `))
            peso_total = peso.melao * qtd
            preco_total = preco.melao * peso_total
            console.log(`
Peso total: ` + peso_total.toFixed(3) + `/Kg.`)
            prompt(`
Aperte ENTER para continuar. `)
            break;

    default:
        console.log(`
Fruta não encontrada ou em falta no estoque.
`)

}
if (preco_total === undefined){

}else {
    console.log(`
O preço total ficou R$` + preco_total.toFixed(2) + `.` + `
`)
    }

