//Conversor de temperatura --> Fahrenheit && Celsius
let unitemp1 = prompt('Qual unidade de temperatura está usando? (Digite F para fahrenheit ou C para celsius)' .toLowerCase());
let unitemp2 = prompt('Qual unidade de temperatura pretende usar? (Digite F para fahrenheit ou C para celsius)' .toLowerCase());
let temp1 = prompt('Qual a temperatura a ser convertida?')

//Celsius pra Fahrenheit:
if(unitemp1 == 'C' && unitemp2 == 'F'){
    let formula1 = temp1 * 1.8  + 32
    alert(`Sua temperatura em graus Fahrenheit é: ${formula1}`)
}
//Fahrenheit pra Celsius:
if (unitemp1 == 'F' && unitemp2 == 'C'){
    let formula2 = (temp1 - 32) / 1.8
    alert(`Sua temperatura em graus celsius é: ${formula2}`)
}