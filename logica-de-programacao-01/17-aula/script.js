function pulaLinha() {

  document.write("<br>");
}

function mostra(frase) {

  document.write(frase);
  pulaLinha();
}

function sorteia() {

  return Math.round(Math.random() * 100);
}

var numeroPensado = sorteia();
var chute = parseInt(prompt("Já pensei. Qual você acha que é?"));

if (chute == numeroPensado) {
  mostra("Uau! Você acertou, pois eu pensei no " + numeroPensado);
}else {
  var contador = 1;
  while (contador <= 10) {
    mostra("Já era, você errou!");
    contador = contador + 1;
  }
}
