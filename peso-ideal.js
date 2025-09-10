//9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que
//calcule seu peso ideal, utilizando as seguintes fórmulas:
//● para homens: (72.7 * h) – 58;
//● para mulheres: (62.1 * h) – 44.7
let altura = parseFloat(prompt('Informe sua altura em metros: ')); 
let sexo = prompt('Informe seu gênero (masculino ou feminino): '.toLowerCase());
if (sexo == 'masculino'){
    console.log(`Seu peso ideal é ${(72.7 * altura) - 58}`)
};
if (sexo == 'feminino'){
    console.log(`Seu peso ideal é ${(62.1 * altura) - 44.7}`)
};