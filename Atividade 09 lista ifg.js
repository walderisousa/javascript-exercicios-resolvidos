// 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que
// calcule seu peso ideal, utilizando as seguintes fórmulas:
// ● para homens: (72.7 * h) – 58;
// ● para mulheres: (62.1 * h) – 44.7

let altura = parseFloat(prompt("Digite aqui sua altura: "))
let sexo = prompt("Digite seu gênero: ")

 if(sexo == "homem"){

    let piah = (72.7 * altura) – 58
    console.log(piah)
 }
 if(sexo == "mulher"){
    let piam = (62.1 * altura) – 44.7
    console.log(piam)
}