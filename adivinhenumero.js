
const numeroSorteado = Math.floor(Math.random() * 100) + 1;

let chute;
let tentativas = 0;

while (chute !== numeroSorteado) {
  chute = Number(prompt("Adivinhe o número entre 1 e 100:"));
  tentativas++;

  if (chute === numeroSorteado) {
    alert(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
  } else if (chute > numeroSorteado) {
    alert("Tente um número menor.");
  } else if (chute < numeroSorteado) {
    alert("Tente um número maior.");
  } else {
    alert("Digite apenas números.");
  }
}