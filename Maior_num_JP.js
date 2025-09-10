/*Faça um programa que leia três números e exiba o maior entre eles.

Dica - Use uma série de comparações if para verificar qual número é o maior e, em seguida, exiba o resultado.*/

let a = prompt();
let b = prompt();
let c = prompt();
if (a > b) {
    if (a > c) {
        console.log(a);
    }
    else {
        console.log(c);
    }
}
else {
    if (a > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}