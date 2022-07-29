function pulaLinha() {

  document.write("<br>");
  document.write("<br>");
}

function mostra(frase) {

  document.write(frase);
  pulaLinha();
}

var numeroPensado = 5;
var chute = parseInt(prompt("Digite seu chute !!!"))

if(chute == numeroPensado){
  document.write("você acertou !");
}else{
  document.write("você errou, o numero pensado foi"+ numeroPensado)
}
